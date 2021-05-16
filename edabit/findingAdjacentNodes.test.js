const isAdjacent = require('./findingAdjacentNodes')
const matrix1 = [[0,1,0,0],[1,0,1,1],[0,1,0,1],[0,1,1,0]]
const matrix2 = [[0,1,0,1,1], [1,0,1,0,0],[0,1,0,1,0],[1,0,1,0,1],[1,0,0,1,0]]
describe('Finding Adjacent Nodes', () => {
  test('1', () => {
    expect(isAdjacent(matrix1, 0, 1)).toBe(true)
    })
  test('2', () => {
    expect(isAdjacent(matrix1, 0, 2)).toBe(false)
    })
  test('3', () => {
    expect(isAdjacent(matrix1, 2, 1)).toBe(true)
    })
  test('4', () => {
    expect(isAdjacent(matrix2, 0, 3)).toBe(true)
    })
  test('5', () => {
    expect(isAdjacent(matrix2, 1, 4)).toBe(false)
    })
  test('6', () => {
    expect(isAdjacent(matrix2, 3, 2)).toBe(true)
    })
})
