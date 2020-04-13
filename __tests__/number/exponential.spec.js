const { exponential } = require('../../number')
const { fraction } = require('../../real')

describe('exponential', () => {
  it('should elevate 0 to the 0', () => {
    try {
      exponential(0, 0)
      throw new Error('this test is broken')
    } catch(err) {
      expect(err.message).toEqual('Illegal Argument: base and exponent cannot be both 0')
    }
  })

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