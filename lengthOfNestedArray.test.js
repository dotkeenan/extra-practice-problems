const getLength = require('./lengthOfNestedArray')
describe('Length of Nested Array', () => {
  test('1', () => {
    expect(getLength([1, [2,3]])).toBe(3)
    })
  test('2', () => {
    expect(getLength([1, [2, [3, 4]]])).toBe(4)
    })
  test('3', () => {
    expect(getLength([1, [2, [3, [4, [5, 6]]]]])).toBe(6)
    })
  test('4', () => {
    expect(getLength([1, 7, 8])).toBe(3)
    })
  test('5', () => {
    expect(getLength([2])).toBe(1)
    })
  test('6', () => {
    expect(getLength([2, [3], 4, [7]])).toBe(4)
    })
  test('7', () => {
    expect(getLength([2, [3, [5, 7]], 4, [7]])).toBe(6)
    })
  test('8', () => {
    expect(getLength([2, [3, [4, [5]]], [9]])).toBe(5)
    })
  test('9', () => {
    expect(getLength([])).toBe(0)
    })
})
