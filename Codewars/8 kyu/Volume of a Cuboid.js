/*
Instructions:
Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. 
Write a function to help Bob with this calculation.
*/

//Solution:
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    // your code here
    return length * width * height;
    //
  };

  return Kata;

})();


//other solution:

class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l * w * h;
  }
};
