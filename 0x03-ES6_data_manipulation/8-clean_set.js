export default function cleanSet(set, startString) {
  const filteredValues = [];
  if (startString === '' || typeof (startString) !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      filteredValues.push(element.substring(startString.length));
    }
  });
  return filteredValues.join('-');
}
