const { fraction } = require('../../real')

describe('freaction function', () => {
  it('should create a fraction from 1 and 2', () => {
    const result = fraction(1, 2)
    expect(result).toEqual(['+', 1, 2])
  })

  it('should create a fraction from -1 and 2', () => {
    const result = fraction(-1, 2)
    expect(result).toEqual(['-', 1, 2])
  })

  it('should create a fraction from 1 and -2', () => {
    const result = fraction(1, -2)
    expect(result).toEqual(['-', 1, 2])
  })

  it('should throw an exception if the denominator is 0', () => {
    try {
      fraction(-1, 0)
      throw new Error('this test is broken')
    } catch(err) {
      expect(err.message).toBe('Illegal Argument: denominator cannot be zero')
    }
  })
})