const keysAndValues = require('./returnObjectKeysAndValues')
describe('Return the Object Keys and Values', () => {
  test('1', () => {
    expect(keysAndValues({ a: 1, b: 2, c: 3 })).toEqual([["a", "b", "c"], [1, 2, 3]])
  })
  test('2', () => {
    expect(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })).toEqual([["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
  })
  test('3', () => {
    expect(keysAndValues({ key1: true, key2: false, key3: undefined })).toEqual([["key1", "key2", "key3"], [true, false, undefined]])
  })
  test('4', () => {
    expect(keysAndValues({ 1: null, 2: null, 3: null })).toEqual([["1", "2", "3"], [null, null, null]])
  })
  test('5', () => {
    expect(keysAndValues({ key1: "cat", key2: "dog", key3: null })).toEqual([["key1", "key2", "key3"], ["cat", "dog", null]])
  })
})
