const { exponential } = require('../../number')
const { fraction } = require('../../real')

describe('exponential', () => {
  it('should elevate 2 to the 0', () => {
    const result = exponential(2, 0)
    expect(result).toBe(1)
  })

  it('should elevate 2 to the 2', () => {
    const result = exponential(2, 2)
    expect(result).toEqual(4)
  })

  it('should elevate -2 to the 2', () => {
    const result = exponential(-2, 2)
    expect(result).toEqual(4)
  })

  it('should elevate 2 to the -2', () => {
    const result = exponential(2, -2)
    expect(result).toEqual(fraction(1, 4))
  })
})