const jazzify = require('./instantJazz')
describe('Instant JAZZ', () => {
  test('1', () => {
    expect(jazzify(['G', 'F', 'C'])).toEqual(['G7', 'F7', 'C7'])
  })
  test('2', () => {
    expect(jazzify(['Dm', 'G', 'E', 'A'])).toEqual(['Dm7', 'G7', 'E7', 'A7'])
  })
  test('3', () => {
    expect(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])).toEqual(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])
  })
  test('4', () => {
    expect(jazzify(['G', 'C7'])).toEqual(['G7', 'C7'])
  })
  test('5', () => {
    expect(jazzify([])).toEqual([])
  })
})
