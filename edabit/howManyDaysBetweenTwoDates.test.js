const getDays = require('./howManyDaysBetweenTwoDates')
describe('How Many Days Between Two Dates', () => {
  test('1', () => {
    expect(getDays(new Date('June 14, 2019'), new Date('June 20, 2019'))).toBe(6)
    })
  test('2', () => {
    expect(getDays(new Date('December 29, 2018'), new Date('January 1, 2019'))).toBe(3)
    })
  test('3', () => {
    expect(getDays(new Date('July 20, 2019'), new Date('July 30, 2019'))).toBe(10)
    })
})
