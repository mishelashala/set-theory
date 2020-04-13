const { absolute } = require('./number')

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

/**
 * Returns the distance between two points
 */
function distance(a, b) {
  return absolute(a - b)
}

module.exports = {
  range,
  distance
}
