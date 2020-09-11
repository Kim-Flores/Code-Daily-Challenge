/*
Instructions:
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

//Solution:
function decipherThis(str) {
//have fun!
  return str.split(' ').map(word => {
    return word.replace( /^\d+/, char => String.fromCharCode(char) )
    .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')
  }).join(" ")
  }


// (/^\d+/) targets any digit char [0-9]
// (/^(.)(.*)(.)(.)$/, '$1$4$3$2) --> (.) any character except line breaks
//  * match zero or more of proceeding token
