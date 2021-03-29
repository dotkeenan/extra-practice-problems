const concat = require('./concatenateVariableArrays')
describe('Concatenate Variable Number of Input Arrays', () => {
  test('1', () => {
    expect(concat([1, 2, 3], [4, 5], [6, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
  })
  test('2', () => {
    expect(concat([1], [2], [3], [4], [5], [6], [7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
  })
  test('3', () => {
    expect(concat([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4])
  })
  test('4', () => {
    expect(concat([4, 4, 4, 4, 4])).toStrictEqual([4, 4, 4, 4, 4])
  })
  test('5', () => {
    expect(concat(['a'], ['b', 'c'])).toStrictEqual(['a', 'b', 'c'])
  })
})
