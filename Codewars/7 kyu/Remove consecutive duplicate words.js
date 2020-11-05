/*
Instructions:

Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/


//Solution:
function removeConsecutiveDuplicates (s){ // your perfect code...
  return s.split(" ").filter(function(value,index,arr){ 
    return value != arr[index+1];}).join(" ");
}

//More Solutions:
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
