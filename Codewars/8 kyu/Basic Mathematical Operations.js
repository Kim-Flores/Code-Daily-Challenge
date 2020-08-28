/*
Instructions:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/


//Solution:
function basicOp(operation, value1, value2){
  switch(operation){
      case '+':
      return value1 + value2;
      break;
      case '-':
      return value1 - value2;
      break;
      case '*':
      return value1 * value2;
      break;
      case '/':
      return value1 / value2;
      break;
      default:
      'Operation not recognized';
  }
}

Other Solutions:

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}

function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}
