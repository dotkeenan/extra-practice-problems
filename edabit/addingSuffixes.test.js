const add_suffix = require ('./addingSuffixes')
add_ly = add_suffix("ly")
add_less = add_suffix("less")
add_ing = add_suffix("ing")

describe('Adding Suffixes', () => {
  test('1', () => {
    expect(add_ly("hopeless")).toBe("hopelessly")
  })
  test('2', () => {
    expect(add_ly("total")).toBe("totally")
  })
  test('3', () => {
    expect(add_less("fear")).toBe("fearless")
  })
  test('4', () => {
    expect(add_less("ruth")).toBe("ruthless")
  })
  test('5', () => {
    expect(add_ing("cheer")).toBe("cheering")
  })
  test('6', () => {
    expect(add_ing("book")).toBe("booking")
  })
})
