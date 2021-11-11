export type Image = {
  width: number;
  height: number;
  url: string;
};

export type Playlist = {
  id: string;
  name: string;
  images: Image[];
  totalTracks: number;
  category: Category | null;
  tags: Tag[];
};

export type Category =
  | 'monthly'
  | 'weekly'
  | 'yearly'
  | 'artist'
  | 'ongoing'
  | 'misc.'
  | 'toutetnimp';

// User Defined type guard for Category
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
export function isCategory(str: string): str is Category {
  return (
    str === 'monthly' ||
    str === 'weekly' ||
    str === 'yearly' ||
    str === 'artist' ||
    str === 'ongoing' ||
    str === 'misc.' ||
    str === 'toutetnimp'
  );
}

export type Tag = 'rock' | 'jazz' | 'acoustic' | 'chill' | 'melancholy';

// User Defined type guard for Tag
export function isTag(str: string): str is Tag {
  return (
    str === 'rock' ||
    str === 'jazz' ||
    str === 'acoustic' ||
    str === 'chill' ||
    str === 'melancholy'
  );
}

export type SearchProperty = 'category';

export type SearchOptions = {
  property: SearchProperty;
  values: string[];
};

// User Defined type guard for search property
export function isSearchProperty(str: string): str is SearchProperty {
  return str === 'category';
}
