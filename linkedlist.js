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
}

const list = new SinglyLinkedList();
list.push("Hello World");
list.push("New Hello World");
