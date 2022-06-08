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
}

const list = new DoublyLinkedList();
list.push("a");
list.push("b");
list.push("c");
