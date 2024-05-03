// eslint-disable-next-line no-unused-vars
import groceriesList from './9-groceries_list';

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    for (const [key, val] of map.entries()) {
      if (val === 1) {
        map.set(key, 100);
      }
    }
  }
  return map;
}
