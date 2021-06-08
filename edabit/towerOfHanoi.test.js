const towerHanoi = require('./towerOfHanoi')
describe('Tower of Hanoi', () => {
  test('1', () => {
    expect(towerHanoi(3)).toBe(7)
    })
  test('2', () => {
    expect(towerHanoi(5)).toBe(31)
    })
  test('3', () => {
    expect(towerHanoi(8)).toBe(255)
    })
  test('4', () => {
    expect(towerHanoi(19)).toBe(524287)
    })
  test('5', () => {
    expect(towerHanoi(9)).toBe(511)
    })
  test('6', () => {
    expect(towerHanoi(13)).toBe(8191)
    })
  test('7', () => {
    expect(towerHanoi(0)).toBe(0)
    })
})
