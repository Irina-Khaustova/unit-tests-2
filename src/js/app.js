export default function sorty(options) {
  const arr = options.slice();
  const arr1 = [];
  for (let j = 0; j < options.length; j += 1) {
    const maxIndex = arr.reduce((acc, curr) => {
      if (acc.health > curr.health) {
        return acc;
      }
      return curr;
    });
    arr1.push(maxIndex);
    arr.splice(arr.indexOf(maxIndex), 1);
  }
  return arr1;
}
