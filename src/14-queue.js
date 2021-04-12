const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  enqueue(element) {
    const newElement = new ListNode();
    newElement.value = element;
    if (this.head === null) {
      this.head = newElement;
      this.tail = this.head;
    } else {
      this.tail.next = newElement;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  dequeue() {
    const deletedElement = this.head;
    this.head = this.head.next;
    this.size--;
    return deletedElement.value;
  }
}
module.exports = Queue;
