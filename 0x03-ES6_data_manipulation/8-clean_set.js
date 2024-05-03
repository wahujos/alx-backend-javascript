export default function cleanSet(set, startString) {
  const filteredValues = [];
  set.forEach((val) => {
    if (startString !== '') {
      if (val.startsWith(startString)) {
        filteredValues.push(val.slice(startString.length));
      }
    }
  });
  return filteredValues.join('-');
}
