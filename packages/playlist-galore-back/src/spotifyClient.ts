import axios from 'axios';
import { clientId, clientSecret } from '../secret';

let accessToken = '';
let accessTokenExpirationDate = 0;

function getAccessToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  const base64data = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
  );
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${base64data}`,
    },
  };
  return axios
    .post('https://accounts.spotify.com/api/token', params, config)
    .then(({ data }) => {
      accessToken = data.access_token;
      accessTokenExpirationDate = Date.now() + data.expires_in * 1000;
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchPlaylists() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios
    .get('https://api.spotify.com/v1/users/1146005630/playlists', config)
    .then(({ data }) => data)
    .catch((error) => {
      console.error(error);
    });
}

export function getPlaylists() {
  if (Date.now() - 30000 > accessTokenExpirationDate) {
    // renew token if it's going to expire in less than 30 seconds
    return getAccessToken().then(() => fetchPlaylists());
  }
  return fetchPlaylists();
}
