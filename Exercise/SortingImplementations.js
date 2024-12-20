export class SortingImplementationsClass {
  constructor() {}
  bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    console.log(`BubbleSort==>`, arr);
  }

  mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);
    let result = this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
    return result;
  }
  merge(leftArr, rightArr) {
    let temp = [];

    while (leftArr.length && rightArr.length) {
      if (leftArr[0] >= rightArr[0]) {
        temp.push(rightArr.shift());
      } else {
        temp.push(leftArr.shift());
      }
    }
    return [...temp, ...leftArr, ...rightArr];
  }

  insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      let sortedIndex = i - 1;
      let unsortedElement = arr[i];

      while (sortedIndex >= 0 && arr[sortedIndex] > unsortedElement) {
        arr[sortedIndex + 1] = arr[sortedIndex];
        sortedIndex--;
      }

      arr[sortedIndex + 1] = unsortedElement;
    }

    console.log(`Inserttion sort answer==>`, arr);
  }
}
