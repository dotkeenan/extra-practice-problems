const areaOfCountry = require('./areaOfCountry');

describe('Get Area Of a Country', () => {
  test('1', () => {
    expect(areaOfCountry("USA", 9372610)).toBe("USA is 6.29% of the total world's landmass")
  })
  test('2', () => {
    expect(areaOfCountry("Russia", 17098242)).toBe("Russia is 11.48% of the total world's landmass")
  })
  test('3', () => {
    expect(areaOfCountry("Iran", 1648195)).toBe("Iran is 1.11% of the total world's landmass")
  })
  test('4', () => {
    expect(areaOfCountry("India", 3287590)).toBe("India is 2.21% of the total world's landmass")
  })
  test('5', () => {
    expect(areaOfCountry("China", 9706961)).toBe("China is 6.52% of the total world's landmass")
  })
  test('6', () => {
    expect(areaOfCountry("Yemen", 527968)).toBe("Yemen is 0.35% of the total world's landmass")
  })
  test('7', () => {
    expect(areaOfCountry("Switzerland", 41284)).toBe("Switzerland is 0.03% of the total world's landmass")
  })
})
