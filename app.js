'use strict'

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null; {

      class Stack {
        constructor() {
          this.stackStorage = new LinkedList();
          this.top = this.stackStorage.head;
        }

        push(value) {
          this.stackStorage.insertAtHead(value);
        }

        pop() {
          const head = this.stackStorage.head;
          this.storage.head = this.stackStorage.head.next;
          return head;
        }

        peek() {
          return this.head;
        }
      }

      class Queue {
        constructor() {
          this.queueStorage = new LinkedList();
          this.front = this.queueStorage.head;
        }

        enqueue(value) {
          this.queueStorage.insertAtHead(value);
        }

        dequeue() {
          let current = this.head;
          let previous = this.head;
          while (current.next !== null) {
            previous = current;
            current = current.next;
          }
          previous.next = null;
          return current.value;
        }

        peek() {
          let current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          return current.value;
        }
      }
    }
  }
}
