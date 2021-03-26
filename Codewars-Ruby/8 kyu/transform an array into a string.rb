=begin
A simple kata, my first.
simply tranform an array into a string, like so:

  transform([4, -56, true, "box"]) => "4-56truebox"
have fun coding!
=end

#Solution:
function transform(array) {
 return array.map(item => item == null ? 'null' : item.toString()).join('')
}

#other solution:
function transform(array) {
  return array.map(String).join('');
}

