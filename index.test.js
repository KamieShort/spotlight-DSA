const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  it("pop should remove and return last item on the stack ", () => {
    const stack = new Stack();
    stack.push("fox");
    stack.push("goose");
    stack.push("lizard");
    expect(stack.pop()).toEqual("lizard");
  });
});
