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

  // get value at index
  get(index) {
    // if index is negative or greater than length, return undefined
    if (index < 0 || index >= this.length) return undefined;

    // if index is 0, return head
    if (index === 0) return this.head;

    // otherwise, set current to head and iterate through list until index is reached
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  // set value at index
  set(index, value) {
    // if index is negative or greater than length, return undefined
    if (index < 0 || index >= this.length) return undefined;

    // if index is 0, set head to value
    if (index === 0) {
      this.head.value = value;
    } else {
      // otherwise, set current to head and iterate through list until index is reached
      let current = this.head;
      for (let i = 1; i <= index; i++) {
        current = current.next;
      }
      current.value = value;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Hello World");
list.push("New Hello World");
