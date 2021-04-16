const objectToArray = require('./keysAndValuesToArray')
describe('Convert Key, Values in an Object to Array', () => {
  test('1', () => {
    expect(objectToArray({
      D: 1,
      B: 2,
      C: 3
    })).toEqual([["D", 1], ["B", 2], ["C", 3]])
  })
  test('2', () => {
    expect(objectToArray({
      likes: 2,
      dislikes: 3,
      followers: 10
    })).toEqual([["likes", 2], ["dislikes", 3], ["followers", 10]])
  })
})
