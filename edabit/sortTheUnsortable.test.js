const sortIt = require('./sortTheUnsortable')
describe('Sort the Unsortable', () => {
  test('1', () => {
    expect(sortIt([4, 1, 3])).toEqual([1, 3, 4])
    })
  test('2', () => {
    expect(sortIt([[4], [1], [3]])).toEqual([[1], [3], [4]])
    })
  test('3', () => {
    expect(sortIt([4, [1], 3])).toEqual([[1], 3, 4])
    })
  test('4', () => {
    expect(sortIt([[4], 1, [3]])).toEqual([1, [3], [4]])
    })
  test('5', () => {
    expect(sortIt([[3], 4, [2], [5], 1, 6])).toEqual([1, [2], [3], 4, [5], 6])
    })
  test('6', () => {
    expect(sortIt([[3], 7, [9], [5], 1, 6])).toEqual([1, [3], [5], 6, 7, [9]])
    })
  test('7', () => {
    expect(sortIt([[3], 7, [9], [5], 1, 6, [0]])).toEqual([[0], 1, [3], [5], 6, 7, [9]])
    })
})
