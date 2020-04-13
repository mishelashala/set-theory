/**
 * Finds the mathematical union of two arrays
 */
function union(listA = [], listB = []) {
  if (!Array.isArray(listA) && !Array.isArray(listB)) {
    throw new Error('Illegal Argument: arguments must be arrays')
  }

  const set = [...listA, ...listB].reduce((acc, val) => {
    acc[val] = val
    return acc
  }, {})

  return Object.values(set)
}

/**
 * Finds the mathematical intersection of two arrays
 */
function intersection(listA = [], listB = []) {
  if (!Array.isArray(listA) && !Array.isArray(listB)) {
    throw new Error('Illegal Argument: arguments must be arrays')
  }

  const combined = [...listA, ...listB]
  const set = combined.reduce((acc, val, index) => {
    const lastIndex = combined.lastIndexOf(val)

    if (index !== lastIndex && !acc[val]) {
      acc[val] = val
    }

    return acc
  }, {})

  return Object.values(set)
}

module.exports = {
  union,
  intersection,
}