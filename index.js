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

module.exports = {
  union
}
