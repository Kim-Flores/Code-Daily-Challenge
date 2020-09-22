/* Instructions:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//Solution:
function getCount(str) {
  var vowel = str.match(/[aeiou]/gi);
  if (vowel === null){
    return 0
  } else{
    return vowel.length;
  }
}

//regex: g searches whole string, i makes it case insensitive
//match method matching a string against a regular expression (regex)

//other solutions:
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}
