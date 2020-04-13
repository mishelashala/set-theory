const { distance } = require('../../point')

describe('distance', () => {
  it('should return the distance between 1 and 10', () => {
    const result = distance(1, 10)
    expect(result).toBe(9)
  })

  it('should return the distance between -1 and -10', () => {
    const result = distance(-1, -10)
    expect(result).toBe(9)
  })
})
