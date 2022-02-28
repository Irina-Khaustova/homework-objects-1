export default function orderByProps(obj, sorts) {
  const arr = Object.keys(obj);
  const resultSort = [];
  arr.sort();
  for (let j = sorts.length; j >= 0; j -= 1) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === sorts[j]) {
        arr.splice(i, 1);
        arr.unshift(sorts[j]);
      }
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    resultSort.push({ key: arr[i], value: obj[arr[i]] });
  }
  return resultSort;
}
