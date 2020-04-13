const { absolute } = require('./number')

/**
 * Creates a representation of a fraction based on two numbers
 */
function fraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Illegal Argument: denominator cannot be zero')
  }

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

  const absoluteNumberator = absolute(numerator)
  const absulteDenominator = absolute(denominator)
  const symbol = getSymbol(numerator, denominator)

  return [symbol, absoluteNumberator, absulteDenominator]
}

/**
 * Returns the fraction symbol based on two symbols
 */
function getSymbol(symbolA, symbolB) {
  if (symbolA !== symbolB) {
    return '-'
  }

  return '+'
}

/**
 * Returns the sum of two fractions
 */
function sumFractions(a, b) {
  /**
   * Returns the fraction denominator based on two numbers
   */
  function getDenominator(denominatorA, denominatorB) {
    if (denominatorA === denominatorB) {
      return denominatorA
    }

    return denominatorA * denominatorB
  }

  /**
   * Returns the fraction numerator based on two fractions
   */
  function getNumerator(fractionA, fractionB) {
    if (fractionA[2] !== fractionB[2]) {
      return (fractionA[1] * fractionB[2]) + (fractionB[1] * fractionA[2])
    }

    return fractionA[1] + fractionB[1]
  }

  const numerator = getNumerator(a, b)
  const denominator = getDenominator(a[2], b[2])
  const symbol = getSymbol(a[0], b[0])

  return [symbol, numerator, denominator]
}

/**
 * Returns the multiplication of two fractions
 */
function multiplyFractions(fractionA, fractionB) {
  const numerator = fractionA[1] * fractionB[1]
  const denominator = fractionA[2] * fractionB[2]
  const symbol = getSymbol(fractionA[0], fractionB[0])

  return [symbol, numerator, denominator]
}

module.exports = {
  fraction,
  sumFractions,
  multiplyFractions
}