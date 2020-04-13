const { fraction, sumFractions } = require('../../real')

describe('sumFractions', () => {
  it('should sum the fractions 1/3 and 2/3', () => {
    const result = sumFractions(fraction(1, 3), fraction(2, 3))
    expect(result).toEqual(['+', 3, 3])
  })

  it('should sum the fractions 1/3 and 2/4', () => {
    const result = sumFractions(fraction(1, 3), fraction(2, 4))
    expect(result).toEqual(['+', 10, 12])
  })

  it('should sum the fractions -1/3 and 2/3', () => {
    const result = sumFractions(fraction(-1, 3), fraction(2, 3))
    expect(result).toEqual(['-', 3, 3])
  })

  it('should sum the fractions -1/3 and -2/3', () => {
    const result = sumFractions(fraction(-1, 3), fraction(-2, 3))
    expect(result).toEqual(['+', 3, 3])
  })
})