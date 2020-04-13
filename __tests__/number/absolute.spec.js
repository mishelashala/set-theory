const { absolute } = require('../../number')

describe('absolute', () => {
  it('should return the absolute value of -1', () => {
    expect(absolute(-1)).toBe(1)
  })

  it('should return the absolute value of 1', () => {
    expect(absolute(1)).toBe(1)
  })

  it('should return 0 when provided 0', () => {
    expect(absolute(0)).toBe(0)
  })
})