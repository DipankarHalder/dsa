// SinglyLinkedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      // otherwise, set tail to previous node and set tail's next to null
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
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
      // otherwise, set head to next node and set head's next to null
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Hello World");
list.push("New Hello World");
