const derivative = require('./derivativeOfAFunction')

describe('Derivative of a Function', () => {
  test('1', () => {
    expect(derivative(1, 4)).toBe(1)
  })
  test('2', () => {
    expect(derivative(3, -2)).toBe(12)
  })
  test('3', () => {
    expect(derivative(4, -3)).toBe(-108)
  })
  test('4', () => {
    expect(derivative(9, -5)).toBe(3515625)
  })
  test('5', () => {
    expect(derivative(1254, 0)).toBe(0)
  })
  test('6', () => {
    expect(derivative(-2, 10)).toBe(-0.002)
  })
})
