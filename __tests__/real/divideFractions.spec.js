const { fraction, divideFractions } = require('../../real')

describe('divideFractions', () => {
  it('should divide the fractions 1/3 and 2/3', () => {
    const result = divideFractions(fraction(1, 3), fraction(2, 3))
    expect(result).toEqual(['+', 3, 6])
  })

  it('should divide the fractions -1/3 and 2/3', () => {
    const result = divideFractions(fraction(-1, 3), fraction(2, 3))
    expect(result).toEqual(['-', 3, 6])
  })

  it('should divide the fractions -1/3 and -2/3', () => {
    const result = divideFractions(fraction(-1, 3), fraction(-2, 3))
    expect(result).toEqual(['+', 3, 6])
  })
})