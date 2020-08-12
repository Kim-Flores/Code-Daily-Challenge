//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s){
  return ''
}



//Solution
function removeExclamationMarks(s) {
  searchExclamation = '!';
  regexReplacement = /!/gi;
  replacement = '';
  if (s.includes(searchExclamation) === true){
    return s.replace(regexReplacement, replacement)
  }
}
