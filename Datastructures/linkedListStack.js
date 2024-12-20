import { LinkedListWithTail } from "./linkedListWithTail.js";

export class LinkedListStack {

  constructor() {
    this.list = new LinkedListWithTail();
  }

  push(value){
    this.list.prepend(value);
  }

  pop(){
   return this.list.removeFromFront()
  }

  peek(){
    return this.list.head.value
  }

  isEmpty(){
    return this.list.isEmpty()
  }

  getSize(){
    return this.list.getSize()
  }

  print(){
    return this.list.print()
  }
}


// const LLS = new LinkedListStack()

// LLS.push(20)
// LLS.push(25)
// LLS.push(30)
// LLS.push(35)
// LLS.print()



// LLS.pop()
// LLS.print()