import { bubbleSort } from "./Algos/bubbleSort.js";
import { cartesianProduct } from "./Algos/cartesianProduct.js";
import { climbingStaircase } from "./Algos/climbingStaircase.js";
import { insertionSort } from "./Algos/insertionSort.js";
import mergeSort from "./Algos/mergeSort.js";
import { quickSort } from "./Algos/quickSort.js";
import { towerOfHanoi } from "./Algos/towerOfHanoi.js";
import { circularQueue } from "./Datastructures/circularQueue.js";
import { HashTable } from "./Datastructures/hashtable.js";
import { LinkedList } from "./Datastructures/linkedList.js";
import { LinkedListQueue } from "./Datastructures/linkedListQueue.js";
import { LinkedListStack } from "./Datastructures/linkedListStack.js";
import { LinkedListWithTail } from "./Datastructures/linkedListWithTail.js";

import { mapDataStructure } from "./Datastructures/maps.js";
import { Queue } from "./Datastructures/queue.js";
import { stackDataStructure } from "./Datastructures/stack.js";
import { SortingImplementationsClass } from "./Exercise/SortingImplementations.js";

// mapDataStructure()

// stackDataStructure()

// const arr = [-6, 20, 8, -2, 4]
// const arr = [8, 20, -2, 4, -6];
// const a = [1, 2];
// const b = [3, 4, 5];

// bubbleSort(arr)
// insertionSort(arr)
// console.log(quickSort(arr));
// console.log(mergeSort(arr));

// console.log(arr);

// console.log(cartesianProduct(a, b));

// console.log(climbingStaircase(1));
// console.log(climbingStaircase(2));
// console.log(climbingStaircase(3));
// console.log(climbingStaircase(4));
// console.log(climbingStaircase(5));

// console.log(towerOfHanoi(3, "A", "C", "B"));


// const LL = new LinkedListWithTail();
// LL.prepend(20)
// LL.prepend(25)
// LL.prepend(30)
// LL.prepend(35)
// console.log(LL)



// const LQ = new LinkedListQueue()

// LQ.enqueue(10)
// LQ.enqueue(15)
// LQ.enqueue(20)
// LQ.enqueue(25)
// LQ.enqueue(30)


// LQ.print()

// LQ.dequeue()
// LQ.dequeue()

// console.log(LQ.peek())
// LQ.print()


// const SI = new SortingImplementationsClass()
// SI.bubbleSort(arr)
// SI.mergeSort(arr)
// SI.insertionSort(arr)

const table = new HashTable(50)
table.set("name"," Bruce")
table.set("mane"," Clerk")
table.set("age",25)


// console.log(table.remove("name"))
// table.display()

console.log(table.get("name"))


