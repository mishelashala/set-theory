const { prefixNotation } = require('../../evaluator')

describe('prefixNotation', () => {
  it('should evaluate + 1 2', () => {
    const result = prefixNotation('+ 1 2')
    expect(result).toBe(3)
  })

  it('should evaluate - 1 2', () => {
    const result = prefixNotation('- 1 2')
    expect(result).toBe(-1)
  })

  it('should evaluate * 2 2', () => {
    const result = prefixNotation('* 2 2')
    expect(result).toBe(4)
  })

  it('should evaluate / 2 2', () => {
    const result = prefixNotation('/ 2 2')
    expect(result).toEqual(1)
  })
})
