/* INSTRUCTIONS:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement. 
*/

//SOLUTION

function switchItUp(number){
//Write your own Code!
  switch(number){
  case 0: "Zero";
    return "Zero";
  break;
  case 1: "One";
    return "One";
  break;
  case 2: "Two";
    return "Two";
  break;
  case 3: "Three";
    return "Three";
  break;
  case 4: "Four";
    return "Four";
  break;
  case 5: "Five";
    return "Five";
  break;
  case 6: "Six";
    return "Six";
  break;
  case 7: "Seven";
    return "Seven";
  break;
  case 8: "Eight";
    return "Eight";
  break;
  case 9: "Nine";
    return "Nine";
  break;
  default:
  console.log("not a number between 0-9")
  }
}

//other solution

function switchItUp(number) {
  switch (number) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
  }
}
