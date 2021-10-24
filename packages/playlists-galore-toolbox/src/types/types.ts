export type Image = {
  whidth: number;
  height: number;
  url: string;
};

export type Playlist = {
  id: string;
  name: string;
  images: Image[];
  totalTracks: number;
};
