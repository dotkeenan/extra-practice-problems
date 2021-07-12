const obj = { a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" }
const obj2 = { a: "pig", b: "pig", c: "pig" }
const obj3 = { a: "sleazball", b: "pervert", c: "pervert", d: "pervert" }

const countNumberOfOccurrences = require('./numberOfOccurrences')
describe('Burglary Series (15): Number of Occurrences', () => {
  test('1', () => {
    expect(countNumberOfOccurrences(obj)).toEqual({ moron: 2, scumbag: 1, idiot:2 })
    })
  test('2', () => {
    expect(countNumberOfOccurrences(obj2)).toEqual({ pig: 3 })
    })
  test('3', () => {
    expect(countNumberOfOccurrences(obj3)).toEqual({ sleazball: 1, pervert: 3 })
    })
  test('4', () => {
    expect(countNumberOfOccurrences(obj3).pervert).toBe(3)
    })
})
