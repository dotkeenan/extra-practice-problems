const countBoomerangs = require('./numberOfBoomerangs.js')
describe('Rectangle Series 1: Skeleton', () => {
  test('1', () => {
    expect(countBoomerangs([9, 5, 9, 5, 1, 1, 1]).toBe(2)
  })
  test('2', () => {
    expect(countBoomerangs([5, 6, 6, 7, 6, 3, 9]).toBe(1)
  })
  test('3', () => {
    expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9]).toBe(0)
  })
  test('4', () => {
    expect(countBoomerangs([5, 9, 5, 9, 5]).toBe(3)
  })
  test('5', () => {
    expect(countBoomerangs([4, 4, 4, 8, 4, 8, 4]).toBe(3)
  })
  test('6', () => {
    expect(countBoomerangs([2, 2, 2, 2, 2, 2, 3]).toBe(0)
  })
  test('7', () => {
    expect(countBoomerangs([2, 2, 2, 2, 3, 2, 3]).toBe(2)
  })
  test('8', () => {
    expect(countBoomerangs([1, 2, 1, 1, 1, 2, 1]).toBe(2)
  })
  test('9', () => {
    expect(countBoomerangs([5, 1, 1, 1, 1, 4, 1]).toBe(1)
  })
  test('10', () => {
    expect(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]).toBe(3)
  })
  test('11', () => {
    expect(countBoomerangs([1, 7, 1, 7, 1, 7, 1]).toBe(5)
  })
  test('12', () => {
    expect(countBoomerangs([5, 5, 5]).toBe(0)
  })
})
