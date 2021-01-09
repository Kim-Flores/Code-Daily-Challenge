/*
Instructions:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

//Solution:
function position(letter){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  if(alpha.includes(letter)){
    return 'Position of alphabet:' + " " + (alpha.indexOf(letter) + 1)
  }
}

//Other Solution:
function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
