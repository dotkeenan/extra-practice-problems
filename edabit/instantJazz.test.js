const jazzify = require('./instantJazz')
describe('Rectangle Series 1: Skeleton', () => {
  test('1', () => {
    expect(jazzify(['G', 'F', 'C'])).toBe(['G7', 'F7', 'C7'])
  })
  test('2', () => {
    expect(jazzify(['Dm', 'G', 'E', 'A'])).toBe(['Dm7', 'G7', 'E7', 'A7'])
  })
  test('3', () => {
    expect(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])).toBe(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])
  })
  test('4', () => {
    expect(jazzify(['G', 'C7'])).toBe(['G7', 'C7'])
  })
  test('5', () => {
    expect(jazzify([])).toBe([])
  })
})
