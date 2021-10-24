import axios from 'axios';

/** *************************************************************************
 *  SPOTIFY API REFERENCE
 *  https://developer.spotify.com/documentation/web-api/reference/#/
 *
 ************************************************************************** */

const CLIENT_ID = process.env.CLIENT_ID || '';
const CLIENT_SECRET = process.env.CLIENT_SECRET || '';

let accessToken = '';
let accessTokenExpirationDate = 0;

function getAccessToken() {
  const body = new URLSearchParams();
  body.append('grant_type', 'client_credentials');

  const base64data = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    'base64'
  );
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${base64data}`,
    },
  };
  return axios
    .post('https://accounts.spotify.com/api/token', body, config)
    .then(({ data }) => {
      accessToken = data.access_token;
      accessTokenExpirationDate = Date.now() + data.expires_in * 1000;
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchPlaylists(offset = 0, limit = 20) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      offset,
      limit,
    },
  };
  return axios
    .get('https://api.spotify.com/v1/users/1146005630/playlists', config)
    .then(({ data }) => data)
    .catch((error) => {
      console.error(error);
    });
}

export function getPlaylists(offset: number, limit: number) {
  if (Date.now() - 30000 > accessTokenExpirationDate) {
    // renew token if it's going to expire in less than 30 seconds
    return getAccessToken().then(() => fetchPlaylists());
  }
  return fetchPlaylists(offset, limit);
}
