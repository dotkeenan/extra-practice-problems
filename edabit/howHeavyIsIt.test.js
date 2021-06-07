const weight = require('./howHeavyIsIt')
describe('How Heavy Is It?', () => {
  test('1', () => {
    expect(weight(4, 10)).toBe(0.5)
    })
  test('2', () => {
    expect(weight(30, 60)).toBe(169.65)
    })
  test('3', () => {
    expect(weight(15, 10)).toBe(7.07)
    })
  test('4', () => {
    expect(weight(20, 40)).toBe(50.27)
    })
  test('5', () => {
    expect(weight(100, 30)).toBe(942.48)
    })
  test('6', () => {
    expect(weight(200, 300)).toBe(37699.11)
    })
  test('7', () => {
    expect(weight(15, 23)).toBe(16.26)
    })
  test('8', () => {
    expect(weight(22, 44)).toBe(66.9)
    })
})
