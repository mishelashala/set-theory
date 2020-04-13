const { union, intersection } = require('../index')

describe('set theory utils', () => {
  describe('union', () => {
    it('should find the union of A and B given non-empty arrays', () => {
      const listA = [1, 2, 3]
      const listB = [4, 5, 6]
      const result = union(listA, listB)
      expect(result).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should find the union of A and B given empty arrays', () => {
      const result = union([], [])
      expect(result).toEqual([])
    })

    it('should find the union of A and B given undefined arrays', () => {
      const result = union(undefined, undefined)
      expect(result).toEqual([])
    })

    it('should throw an error when a non-array is provided', () => {
      try {
        const result = union(null, null)
        throw new Error('this test is broken')
      } catch(err) {
        expect(err.message).toBe('Illegal Argument: arguments must be arrays')
      }
    })
  })

  describe('intersection', () => {
    it('should find the intersection of A and B given two non-empty arrays', () => {
      const result = intersection([1, 2, 3], [3, 4, 5])
      expect(result).toEqual([3])
    })

    it('should find the intersection of A and B given two empty arrays', () => {
      const result = intersection([], [])
      expect(result).toEqual([])
    })

    it('should find the intersection of A and B given undefined arguments', () => {
      const result = intersection(undefined, undefined)
      expect(result).toEqual([])
    })

    it('should throw an error when a non-array is provided', () => {
      try {
        const result = intersection(null, null)
        throw new Error('this test is broken')
      } catch(err) {
        expect(err.message).toBe('Illegal Argument: arguments must be arrays')
      }
    })
  })
})

