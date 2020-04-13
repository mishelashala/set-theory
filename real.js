const { absolute } = require('./number')

/**
 * Returns the symbol of the whole fraction
 */
function getSymbol(numerator, denominator) {
  let symbol = '+'

  if (numerator < 0 && denominator > 0) {
    symbol = '-'
  }

  if (denominator < 0 && numerator > 0) {
    symbol = '-'
  }

  return symbol
}

/**
 * Creates a representation of a fraction based on two numbers
 */
function fraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Illegal Argument: denominator cannot be zero')
  }

  const absoluteNumberator = absolute(numerator)
  const absulteDenominator = absolute(denominator)
  const symbol = getSymbol(numerator, denominator)

  return [symbol, absoluteNumberator, absulteDenominator]
}

module.exports = {
  fraction
}