// export function insertionSort(arr) {
//   // Assume the very first element on the left is sorted
//   //sorted is the left element while unsorted is the right element
//   for (let i = 0; i < arr.length; i++) {
//     let sortedIndex = i - 1;
//     let unsortedElement = arr[i];

//     while (sortedIndex >= 0 && arr[sortedIndex] > unsortedElement) {
//       arr[sortedIndex + 1] = arr[sortedIndex];
//       sortedIndex--;
//     }

//     arr[sortedIndex + 1] = unsortedElement;
//   }
// }



export function insertionSort(arr){
  // assume the left elemented = sorted
  // assume the right elemen is unsorted

  for(var i=0; i<arr.length; i++){
    let sortedIndex = i - 1;
    let unsortedElement = arr[i];

    while(sortedIndex >=0 && arr[sortedIndex] > unsortedElement){
      arr[sortedIndex + 1] = arr[sortedIndex];
      sortedIndex --
    }
    arr[sortedIndex + 1] = unsortedElement;
  }
  console.log(arr);

}

// const cards = [4, 2, 6, "Ace", 3, 5, "King", "Jack", "Queen"];

// function insertionSort2(cards) {
//   const rankMap = {
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     10: 10,
//     Jack: 11,
//     Queen: 12,
//     King: 13,
//     Ace: 14,
//   };

//   for (let i = 1; i < cards.length; i++) {
//     let currentCard = cards[i];
//     let sortedIndex = i - 1;
//     let unsorted =
//       typeof currentCard === "number" ? currentCard : rankMap[currentCard];

//     // Shift elements with a higher rank to the right
//     while (sortedIndex >= 0) {
//       let sortedElement =
//         typeof cards[sortedIndex] === "number"
//           ? cards[sortedIndex]
//           : rankMap[cards[sortedIndex]];
//       if (sortedElement > unsorted) {
//         cards[sortedIndex + 1] = cards[sortedIndex];
//         sortedIndex--;
//       } else {
//         break;
//       }
//     }

//     // Place the current card in the correct position
//     cards[sortedIndex + 1] = currentCard;
//   }

//   return cards;
// }

// // Sort the array
// const sortedCards = insertionSort2(cards);
// console.log(sortedCards);
