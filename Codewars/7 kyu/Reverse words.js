/*
Instructions:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


//Solution:
function reverseWords(str) {
  let result = ''
  let split = str.split(' ')
  for(let i = 0; i < split.length; i++){
    if(i == split.length-1){
      result += split[i].split('').reverse().join('')
      break;
    }
    result += split[i].split('').reverse().join('') + ' ' 
  }
  return result
}

//Other solutions:
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}


