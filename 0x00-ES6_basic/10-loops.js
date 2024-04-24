export default function appendToEachArrayValue(array, appendString) {
  const anotherArray = [];
  for (const value of array) {
    anotherArray.push(appendString + value);
  }
  return anotherArray;
}
