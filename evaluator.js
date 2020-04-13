/**
 * Returns true if the operator passed is a valid (allowed) operator
 */
function isOperator(operator) {
  const operatorList = ['+', '-', '*', '/']
  return operatorList.includes(operator)
}

/**
 * Returns the application of a binary operation
 */
function applyOperator(operator, operandA, operandB) {
  const OperatorSymbols = {
    PLUS: '+',
    MINUS: '-',
    MULTIPLY: '*',
    DIVIDE: '/',
  }

  if (operator === OperatorSymbols.PLUS) {
    return operandA + operandB
  }

  if (operator === OperatorSymbols.MINUS) {
    return operandA - operandB
  }

  if (operator === OperatorSymbols.MULTIPLY) {
    return operandA * operandB
  }

  if (operator === OperatorSymbols.DIVIDE) {
    return operandA / operandB
  }
}

/**
 * Groups multi-digit numbers from a list of characters
 */
function groupNumbers(stack, currentChar) {
  if (Number.isInteger(parseInt(currentChar, 10))) {
    const previousChar = stack.length ? stack[stack.length - 1] : undefined
    let value =
      previousChar && Number.isInteger(parseInt(previousChar, 10))
        ? `${currentChar}${previousChar}`
        : currentChar

    let index = stack.length ? stack.length - 1 : 0
    stack[index] = value
  } else {
    stack.push(currentChar)
  }

  return stack
}

/**
 * Returns the evaluation of an expression on prefix notation
 */
function prefixNotation(str = '') {
  const stack = []

  str
    .split('')
    .reverse()
    .reduce(groupNumbers, [])
    .forEach((char) => {
      if (char === ' ') {
        return
      }

      if (isOperator(char)) {
        const operandA = parseInt(stack.pop(), 10)
        const operandB = parseInt(stack.pop(), 10)
        const value = applyOperator(char, operandA, operandB)
        return stack.push(value)
      }

      stack.push(char)
    })

  return stack.pop()
}

module.exports = {
  prefixNotation,
}
