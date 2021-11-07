import { Category, isCategory, isTag, Tag } from 'playlists-galore-toolbox';

export function getCategory(description: string, name: string) {
  const category = description.match(/@category=(.*?);/);
  if (category && isCategory(category[1])) {
    return category[1] as Category;
  }
  console.error('Category is missing for ', name);
  return null;
}

export function getTags(description: string, name: string) {
  const tags = description.match(/@tags=(.*?);/);
  if (tags) {
    const tagsArray = tags[1].split(',');
    const res: Tag[] = [];
    for (const tag of tagsArray) {
      if (isTag(tag)) {
        res.push(tag);
      } else {
        console.error(`Incorrect tag ${tag} for ${name}`);
      }
    }
    return res;
  }
  return [];
}
