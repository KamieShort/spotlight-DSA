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

/* 

[]

enqueue('cookie')  [cookie]
enqueue('donut')  [donut, cookie]
dequeue()   [donut] cookie

*/

module.exports = { Stack, Queue };
