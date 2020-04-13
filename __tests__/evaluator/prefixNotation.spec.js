const { prefixNotation } = require('../../evaluator')

describe('prefixNotation', () => {
  describe('one digit values', () => {
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

    it('should evaluate * 3 + 1 4', () => {
      const result = prefixNotation('* 3 + 1 4')
      expect(result).toEqual(15)
    })
  })

  describe('multiple digit values', () => {
    it('should evaluate + 12 2', () => {
      const result = prefixNotation('+ 12 2')
      expect(result).toBe(14)
    })

    it('should evaluate - 2 122', () => {
      const result = prefixNotation('- 2 122')
      expect(result).toBe(-120)
    })

    it('should evaluate - 22 12', () => {
      const result = prefixNotation('* 22 12')
      expect(result).toBe(264)
    })

    it('should evaluate / 12 2', () => {
      const result = prefixNotation('/ 12 2')
      expect(result).toBe(6)
    })
  })
})
