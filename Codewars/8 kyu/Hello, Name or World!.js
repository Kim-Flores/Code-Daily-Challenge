/*Instructions:
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String
*/

//Solution:
function hello(name) {
  if (name){
    let lowerCase = name.toLowerCase();
    let newName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    return `Hello, ${newName}!`;
  }else{
    return "Hello, World!"
  }
}

//Other solutions:
function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}
