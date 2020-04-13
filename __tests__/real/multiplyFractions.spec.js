const { fraction, multiplyFractions } = require('../../real')

describe('multiplyFractions', () => {
  it('should multiply the fractions 1/3 and 2/3', () => {
    const result = multiplyFractions(fraction(1, 3), fraction(2, 3))
    expect(result).toEqual(['+', 2, 9])
  })

  it('should multiply the fractions -1/3 and 2/3', () => {
    const result = multiplyFractions(fraction(-1, 3), fraction(2, 3))
    expect(result).toEqual(['-', 2, 9])
  })

  it('should multiply the fractions -1/3 and -2/3', () => {
    const result = multiplyFractions(fraction(-1, 3), fraction(-2, 3))
    expect(result).toEqual(['+', 2, 9])
  })
})