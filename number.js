const { fraction } = require('./real')

/**
 * Returns the absolute value of a number
 */
function absolute(num) {
  return num < 0 ? -num : num
}

/**
 * Returns the result of elevating the base to a certain exponent
 */
function exponential(base, exponent) {
  if (base === 0 && exponent === 0) {
    throw new Error('Illegal Argument: base and exponent cannot be both 0')
  }

  if (exponent === 0) {
    return 1
  }

  let result = 1
  let absoluteExponent = absolute(exponent)

  for (let index = 1; index <= absoluteExponent; index++) {
    result *= base
  }

  if (exponent < 0) {
    return fraction(1, result)
  }

  return result
}

module.exports = {
  absolute,
  exponential
}