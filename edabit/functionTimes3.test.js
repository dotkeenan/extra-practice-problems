const product = require('./functionTimes3')
describe('Function Times 3', () => {
  test('1', () => {
    expect(product(1, 2)(1, 1)(2, 3)).toBe(8)
  })
  test('2', () => {
    expect(product(10, 2)(5, 0)(2, 3)).toBe(100)
  })
  test('3', () => {
    expect(product(1, 2)(2, 3)(3, 4)).toBe(30)
  })
  test('4', () => {
    expect(product(1, 2)(0, 3)(3, 0)).toBe(0)
  })
})
