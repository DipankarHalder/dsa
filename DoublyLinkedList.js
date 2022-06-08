// DoublyLinkedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to end of list
  push(value) {
    // create new node
    let newNode = new Node(value);

    // if list is empty, set head and tail to new node
    // otherwise, set new node's next to tail and set tail to new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // add to beginning of list
  unshift(value) {
    // create new node
    let newNode = new Node(value);

    // if list is empty, set head and tail to new node
    // otherwise, set new node's next to head and set head to new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // remove from end of list
  pop() {
    // if list is empty, return undefined
    if (!this.head) return undefined;

    // if list has only one node, set head and tail to null
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // find the second to last node
      let secondToLastNode = this.getNodeAt(this.length - 2);
      // set secondToLastNode's next to null
      secondToLastNode.next = null;
      // set tail to secondToLastNode
      this.tail = secondToLastNode;
    }
    this.length--;
    return this;
  }

  // remove from beginning of list
  shift() {
    // if list is empty, return undefined
    if (!this.head) return undefined;

    // if list has only one node, set head and tail to null
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // set head to next node
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }

  // get node at index
  getNodeAt(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // get value at index
  get(index) {
    return this.getNodeAt(index).value;
  }

  // set value at index
  set(index, value) {
    this.getNodeAt(index).value = value;
    return this;
  }

  // insert value at index
  insert(index, value) {
    // if index is negative or greater than length, return undefined
    if (index < 0 || index >= this.length) return undefined;

    // if index is 0, set head to new node
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      // if index is length, set tail to new node
      this.push(value);
    } else {
      // otherwise, set current to head and iterate through list until index is reached
      let newNode = new Node(value);
      let current = this.head;
      for (let i = 1; i <= index; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
    return this;
  }

  // remove value at index
  remove(index) {
    // if index is negative or greater than length, return undefined
    if (index < 0 || index >= this.length) return undefined;

    // if index is 0, set head to next node
    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      // if index is length - 1, set tail to previous node
      this.pop();
    } else {
      // otherwise, set current to head and iterate through list until index is reached
      let current = this.head;
      for (let i = 1; i < index; i++) {
        current = current.next;
      }
      current.next = current.next.next;
      this.length--;
    }
    return this;
  }

  // reverse list
  reverse() {
    // if list is empty, return undefined
    if (!this.head) return undefined;

    // set current to head and previous to null
    let current = this.head;
    let previous = null;
    // iterate through list
    while (current) {
      // set next to current's next
      let next = current.next;
      // set current's next to previous
      current.next = previous;
      // set previous to current
      previous = current;
      // set current to next
      current = next;
    }
    // set head to previous
    this.head = previous;
    return this;
  }

  // print list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // print list in reverse
  printReverse() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // return list as array
  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

const list = new DoublyLinkedList();
list.push("a");
list.push("b");
list.push("c");
