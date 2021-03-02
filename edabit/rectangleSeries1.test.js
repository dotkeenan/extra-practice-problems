const Rectangle = require('./rectangleSeries1.js')
describe('Rectangle Series 1: Skeleton', () => {
  test('1', () => {
    expect(new Rectangle(1, 2, 5, 6).x).toBe(1, "Invalid X.")
  })
  test('2', () => {
    expect(new Rectangle(1, 2, 5, 6).y).toBe(2, "Invalid Y.")
  })
  test('3', () => {
    expect(new Rectangle(1, 2, 5, 6).width).toBe(5, "Invalid Width.")
  })
  test('4', () => {
    expect(new Rectangle(1, 2, 5, 6).height).toBe(6, "Invalid Height.")
  })
  test('5', () => {
    expect(new Rectangle(1, 2, 5, 6).toString()).toBe("[x=1, y=2, width=5, height=6]")
  })
})
