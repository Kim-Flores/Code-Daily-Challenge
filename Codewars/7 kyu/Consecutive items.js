/*
Instructions:
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

//Solution:
function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++){
    let pair = []
    pair.push(arr[i], arr[i+1])
    if (pair.includes(a) && pair.includes(b)) {
      return true
    }
  }
  return false
}

// function consecutive(arr, a, b) {
//   if ([[a],[b]] && [[b],[a]]){   
//   return true
//  }else{
//    return false
//  }
// }

//Other Solution:
function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}

