const removeABC = require('./removeTheLettersABC')
describe('Remove the Letters ABC', () => {
  test('1', () => {
    expect(removeABC("This might be a bit hard")).toBe("This might e  it hrd")
    })
  test('2', () => {
    expect(removeABC("This is awesome")).toBe("This is wesome")
    })
  test('3', () => {
    expect(removeABC("hello world!")).toBe(null)
    })
  test('4', () => {
    expect(removeABC("coding is fun!")).toBe("oding is fun!")
    })
  test('5', () => {
    expect(removeABC("")).toBe(null)
    })
})
