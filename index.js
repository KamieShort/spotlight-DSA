class Stack {
  #list = [];

  push(item) {
    this.#list.push(item);
  }

  pop() {
    return this.#list.pop();
  }
}

const stack = new Stack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");

console.log(stack.pop());

class Queue {}

module.exports = { Stack, Queue };
