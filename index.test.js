const { push, pop, unshift, shift } = require('./index.js');

describe('push', () => {
  it('should add an element to an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(push(arr, 'd')).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe('d');
  });
});

describe('push', () => {
  it('should remove last element from array', () => {
    const arr = ['a', 'b', 'c'];
    expect(pop(arr)).toBe('c');
    expect(arr.length).toBe(2);
    expect(arr[1]).toBe('b');
  });
});

describe('unshift', () => {
  it('add item to the beginning of the array', () => {
    const arr = ['a', 'b', 'c'];
    expect(unshift(arr, 'd')).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[0]).toBe('d');
  });
});

describe('shift', () => {
  it('remove item from the beginning of the array', () => {
    const arr = ['a', 'b', 'c'];
    expect(shift(arr)).toBe('a');
    expect(arr.length).toBe(2);
    expect(arr[0]).toBe('b');
  });
});
