const sumPrimes = require('./sumOfPrimeNumbers')
describe('Sum of Prime Numbers', () => {
  test('1', () => {
    expect(sumPrimes([1,2,3,4,5,6,7,8,9,10])).toBe(17)
    })
  test('2', () => {
    expect(sumPrimes([2,3,4,11,20,50,71])).toBe(87)
    })
  test('3', () => {
    expect(sumPrimes([19,21,24,27,30,37])).toBe(56)
    })
  test('4', () => {
    expect(sumPrimes([69,79,87,97,101])).toBe(277)
    })
  test('5', () => {
    expect(sumPrimes([53,59,28,50,45,33,61])).toBe(173)
    })
  test('6', () => {
    expect(sumPrimes([])).toBe(0)
    })
  test('7', () => {
    expect(sumPrimes([11,11,11,11,11,22,22,22])).toBe(55)
    })
  test('8', () => {
    expect(sumPrimes([67,24,58,28,71,73,99])).toBe(211)
    })
})
