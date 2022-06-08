class Stack {
  #list = [];

  push(item) {
    this.#list.push(item);
  }

  pop() {
    return this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
}

const stack = new Stack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");

console.log(stack.pop());

class Queue {
  #list = [];

  enqueue(item) {
    this.#list.unshift(item);
  }

  dequeue() {
    return this.#list.pop();
  }
}

function reverse(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

module.exports = { Stack, Queue, reverse };
