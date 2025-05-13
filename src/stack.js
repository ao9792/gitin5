export const stack = {
    items: [],
    push(item) { this.items.push(item); },
    pop() { return this.items.pop(); },
    peek() { return this.items[this.items.length - 1]; },
  };
  