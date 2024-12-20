import { LinkedListWithTail } from "./linkedListWithTail.js";

export class LinkedListQueue {
  constructor() {
    this.list = new LinkedListWithTail();
  }

  enqueue(item) {
    this.list.append(item);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}
