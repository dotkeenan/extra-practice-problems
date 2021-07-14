const combinations = require('./combinations')
describe('Combinations', () => {
  test('1', () => {
    expect(combinations(2)).toBe(2)
    })
  test('2', () => {
    expect(combinations(2, 3)).toBe(6)
    })
  test('3', () => {
    expect(combinations(3, 5)).toBe(15)
    })
  test('4', () => {
    expect(combinations(5, 6, 7)).toBe(210)
    })
  test('5', () => {
    expect(combinations(5, 5, 5, 5)).toBe(625)
    })
  test('6', () => {
    expect(combinations(3, 6, 9)).toBe(162)
    })
  test('7', () => {
    expect(combinations(2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(3628800)
    })
  test('8', () => {
    expect(combinations(4, 5, 6)).toBe(120)
    })
  test('9', () => {
    expect(combinations(5, 6, 7, 8)).toBe(1680)
    })
  test('10', () => {
    expect(combinations(6, 7, 0)).toBe(42)
    })
})
