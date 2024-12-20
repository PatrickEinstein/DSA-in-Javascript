export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head; //i.e the next of the newly created node will be the existing head of this list
      this.head = node; // this newly created node will now be the new head
    }
    this.size++;
  }

  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  getNode(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    console.log(` node at index ${index} is ==> ${JSON.stringify(node)}`);
    return node.value;
  }

  getIndexOfValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }

    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        console.log(`${value} occured at ${i}`);
        return i;
      }
      curr = curr.next;
      i++;
    }
    console.log(`${value} occured at ${-1}`);
    return -1;
  }

  getValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }
    let node;
    let prev = this.head;
    if (prev.value === value) {
      console.log(
        `Node we looking for ${prev.value} in ${JSON.stringify(prev)}`
      );
      return prev.value;
    }
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }

    if (prev.next) {
      node = prev.next;
      console.log(
        `Node we looking for ${node.value} in ${JSON.stringify(node)}`
      );
      return node.value;
    }
    console.log(`Node we looking for ${value} in ${null}`);
    return null;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } else if (0 < index && index < this.size) {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let removedNode;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        console.log(`PreviousNode==>`, prev, `removedNode==>`, removedNode);
        this.size--;
        return value;
      }
      return null;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while(curr){
      let next = curr.next;
      curr.next = prev
      prev = curr
      curr = next;
    }

    this.head = prev;
  }
}

const LL = new LinkedList();


// LL.prepend(10)
// LL.prepend(20)
// LL.prepend(30)

// LL.append(10); //0
// LL.append(20); //1
// LL.append(30); //2
// LL.append(40); //3
// LL.append(50); //4
// LL.insert(25,0)
// LL.insert(30,1)
// LL.insert(35,2)
// LL.insert(40,3)
// LL.insert(70,2)

// LL.getNode(2)
// LL.removeFrom(2)
// LL.removeValue(30)
// LL.getValue(10)
// LL.getIndexOfValue(30)





// LL.reverse()
// console.log(LL)

// LL.print()