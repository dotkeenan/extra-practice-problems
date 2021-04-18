const intWithinBounds = require('./integerInRange')
describe('Integer in range?', () => {
  test('1', () => {
    expect(intWithinBounds(3, 1, 9)).toBe(true)
    })
  test('2', () => {
    expect(intWithinBounds(6, 1, 6)).toBe(false)
    })
  test('3', () => {
    expect(intWithinBounds(4.5, 3, 8)).toBe(false)
    })
  test('4', () => {
    expect(intWithinBounds(-5, -10, 6)).toBe(true)
    })
  test('5', () => {
    expect(intWithinBounds(4, 0, 0)).toBe(false)
    })
  test('6', () => {
    expect(intWithinBounds(10, 9, 11)).toBe(true)
    })
  test('7', () => {
    expect(intWithinBounds(6.3, 2, 6)).toBe(false)
    })
  test('8', () => {
    expect(intWithinBounds(6.3, 2, 10)).toBe(false)
    })
  test('9', () => {
    expect(intWithinBounds(9, 2, 3)).toBe(false)
    })
  test('10', () => {
    expect(intWithinBounds(9, 9, 9)).toBe(false)
    })
  test('11', () => {
    expect(intWithinBounds(-3, -5, -2)).toBe(true)
    })
  test('12', () => {
    expect(intWithinBounds(-3, -5, -3)).toBe(false)
    })
  test('12', () => {
    expect(intWithinBounds(-3, -10, 10)).toBe(true)
    })
  test('12', () => {
    expect(intWithinBounds(0, -3, 3)).toBe(true)
    })
  test('12', () => {
    expect(intWithinBounds(0, 0, 1)).toBe(true)
    })
  test('12', () => {
    expect(intWithinBounds(7, 7, 12)).toBe(true)
    })
})
