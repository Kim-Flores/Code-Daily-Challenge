

//My solution:

function validatePIN (pin) {
  //return true or false
  let pinLength = pin.length;
  let intRegex = /^(\d{4}|\d{6})$/;
  if (intRegex.test(pin)){
    return true;
  }else{
    return false;
  }
}

//   let intRegex = /^\d+$/;
//   if(pin.length == 4 || pin.length == 6){
//     if (intRegex.test(pin)){
//       return true;
//     }
//   }else{
//     return false;
//   }


// solution closest to my first attempt:

function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}

// cleanest solution:
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}





