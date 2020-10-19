/*
Instructions:
For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"

Note The array will never be empty and n will always be smaller than the length of the array.

Example
  sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) => "product"
Explanation
The sum of the 3 highest numbers is 41 + 36 + 20 = 97

The product of the lowest 3 numbers is 8 x 9 x 10 = 720

The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"
*/

//Solution:
function sumOrProduct(array, n) {
  // your code here
  let sortedArr = array.sort((a,b) => a - b)
  
  let productArr = sortedArr.slice(0,n)
  let sumArr = sortedArr.slice(-n)
   
  let product = productArr.reduce((a, b) => a * b );
  
   let sum = sumArr.reduce((a, b) => a + b )
  
  if (sum > product){
    return "sum"
  }else if (product > sum){
    return "product"
  }else if (sum == product) {
    return "same"
  }
}
