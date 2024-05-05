// export default function cleanSet(set, startString) {
//   const filteredValues = [];
//   if (startString === '' || typeof (startString) !== 'string') {
//     return '';
//   }
//   set.forEach((element) => {
//     if (element.startsWith(startString)) {
//       filteredValues.push(element.substring(startString.length));
//     }
//   });
//   return filteredValues.join('-');
// }

/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set of values.
 * @param {string} startString - The string to check if values start with.
 * @returns {string} - A string containing all values of the set that start with startString
 */
export default function cleanSet(set, startString) {
  // Check if startString is undefined or empty
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((value) => value.startsWith(startString)) // Filter values that start with startString
    .map((value) => value.slice(startString.length)) // Map to remove startString from each value
    .join('-'); // Join the filtered and mapped values with '-'
}
