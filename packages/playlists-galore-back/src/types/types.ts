import { Playlist } from 'playlists-galore-toolbox';

/* eslint-disable camelcase */

export type SpotifyResponse = {
  href: string;
  items: SpotifyPlaylist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};

export type SpotifyImage = {
  url: string;
  height: number;
  width: number;
};

export type SpotifyPlaylist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [SpotifyImage, SpotifyImage, SpotifyImage];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

export type Cache = {
  playlists: Playlist[];
  timestamp: null | number;
  status: null | string;
};
