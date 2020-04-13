const { range } = require('../../point')

describe('range', () => {
  it('should generate a range from 0 to 5', () => {
    const result = range(0, 5)
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should generate a range from -1 to 4', () => {
    const result = range(-1, 4)
    expect(result).toEqual([-1, 0, 1, 2, 3, 4])
  })

  it('should throw an error if start is bigger than end', () => {
    try {
      range(1, -1)
      throw new Error('this test is broken')
    } catch(err) {
      expect(err.message).toEqual('Illegal Argument: start should be smaller than end of range')
    }
  })

  it('should generate a range with one element from 1 to 1', () => {
    const result = range(1, 1)
    expect(result).toEqual([1])
  })
})
