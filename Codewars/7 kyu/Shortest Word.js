/*
Instructions:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//Solution:
function findShort(s){
  let words = s.split(" ")
  let shortest = words[0].length
  for (let i = 0; i < words.length; i++){
    if (words[i].length < shortest){
      shortest = words[i].length
    }
  }
  return shortest
}

// shortest variable is comparing the the first word in the string with the rest of the words
// looping through each index in the array and assigning shortest var to the index with the shortest word


