const checkEquals = require('./ValueVsReferenceTypes')
describe('Fix the Error: Value vs Reference Types', () => {
  test('1', () => {
    expect(checkEquals([1, 2], [1, 3])).toBe(false)
    })
  test('2', () => {
    expect(checkEquals([1, 2], [1, 2])).toBe(true)
    })
  test('3', () => {
    expect(checkEquals([4, 5, 6], [4, 5, 6])).toBe(true)
    })
  test('4', () => {
    expect(checkEquals([4, 7, 6], [4, 5, 6])).toBe(false)
    })
})
