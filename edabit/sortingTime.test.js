const sortArray = require('./sortingTime')
describe('Sorting Time', () => {
  test('1', () => {
    expect(sortArray([2, -5, 1, 4, 7, 8])).toEqual([-5, 1, 2, 4, 7, 8])
  })
  test('2', () => {
    expect(sortArray([23, 15, 34, 17, -28])).toEqual([-28, 15, 17, 23, 34])
  })
  test('3', () => {
    expect(sortArray([38, 57, 45, 18, 47, 39])).toEqual([18, 38, 39, 45, 47, 57])
  })
  test('4', () => {
    expect(sortArray([26, -1, -45, 74, 20])).toEqual([-45, -1, 20, 26, 74])
  })
})
