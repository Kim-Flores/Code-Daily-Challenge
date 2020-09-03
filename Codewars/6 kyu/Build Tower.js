/*
Instructions:
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

JavaScript: returns an Array;
*/

//Solution:
function towerBuilder(floors) {
  // build here
  let result = [];
  let rowTotal = floors + (floors - 1);
  for(let i = 0; i < floors; i++) { 
    let spaces = "";
    for(let j = 0; j < i; j++) { 
      spaces += " "; 
      } 
    let row = "";
    for(let k = rowTotal; k > 0; k--) {
      row += "*";
    }
    rowTotal -= 2;
    result.unshift(spaces + row + spaces);
}
  return result;
}




//Other Solution:

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
