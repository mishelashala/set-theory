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

/**
 * Generates an array of elements representing a range
 */
function range(start, end) {
  if (start > end) {
    throw new Error('Illegal Argument: start should be smaller than end of range')
  }

  let result = []

  for (let index = start; index <= end; index++) {
    result.push(index)
  }

  return result
}

module.exports = {
  union,
  intersection,
  range
}
