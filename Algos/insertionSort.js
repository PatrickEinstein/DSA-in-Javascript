export function insertionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let indexToLeftofNumberToInsert = i - 1;
    while (indexToLeftofNumberToInsert >= 0 && arr[indexToLeftofNumberToInsert] > numberToInsert) {
      arr[indexToLeftofNumberToInsert + 1] = arr[indexToLeftofNumberToInsert];
      indexToLeftofNumberToInsert = indexToLeftofNumberToInsert - 1;
    }
    arr[indexToLeftofNumberToInsert + 1] = numberToInsert;
  }


}

