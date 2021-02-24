const changeEnough = require('./convenienceStore.js');

describe('changeEnough', () => {
  test('1', () => {
    expect(changeEnough([2, 100, 0, 0], 14.11)).toBe(false)
  });
  test('2', () => {
    expect(changeEnough([0, 0, 20, 5], 0.75)).toBe(true)
  });
  test('3', () => {
    expect(changeEnough([30, 40, 20, 5], 12.55)).toBe(true)
  });
  test('4', () => {
    expect(changeEnough([10, 0, 0, 50], 13.85)).toBe(false)
  });
  test('5', () => {
    expect(changeEnough([1, 0, 5, 219], 19.99)).toBe(false)
  });
  test('6', () => {
    expect(changeEnough([1, 0, 2555, 219], 127.75)).toBe(true)
  });
  test('7', () => {
    expect(changeEnough([1, 335, 0, 219], 35.21)).toBe(true)
  });
})
