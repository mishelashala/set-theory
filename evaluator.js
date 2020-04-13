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
 * Returns the evaluation of an expression on prefix notation
 */
function prefixNotation(str = '') {
  const stack = []

  str
    .split('')
    .reverse()
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
