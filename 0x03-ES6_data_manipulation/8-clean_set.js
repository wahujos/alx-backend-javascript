export default function cleanSet(set, startString) {
  const filteredValues = [];
  if (startString.length === 0 || typeof (startString) !== 'string' || !(set instanceof Set)) {
    return '';
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      filteredValues.push(element.substring(startString.length));
    }
  });
  return filteredValues.join('-');
}
