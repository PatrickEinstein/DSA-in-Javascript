export default function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  console.log(mergeSort(leftArr), mergeSort(rightArr))

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    console.log(
      `leftArr`,leftArr[0],
      `rightArr`,rightArr[0],
      // `letfArr.shift==>`, leftArr.shift(),
    )
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...rightArr, ...leftArr];
}
