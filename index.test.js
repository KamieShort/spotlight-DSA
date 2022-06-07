const { Stack, Queue } = require("./index.js");

describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });

  it("pop should remove and return last item on the stack ", () => {
    const stack = new Stack();
    stack.push("fox");
    stack.push("goose");
    stack.push("lizard");
    expect(stack.pop()).toEqual("lizard");
  });
});

describe("Queue Class", () => {
  it("tests enqueue and dequeue", () => {
    const queue = new Queue();
    queue.enqueue("hedwig");
    queue.enqueue("scabbers");

    expect(queue.dequeue()).toEqual("hedwig");
  });
});
