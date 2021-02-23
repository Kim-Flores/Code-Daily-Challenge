/*
Instructions:
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

ensure_question("Yes") # => "Yes?" 
ensure_question("No?") # => "No?"
*/

//Solution:
def ensure_question(s)
  s.end_with?('?') == false ? s.insert(-1, "?") : s
end

//Other Solutions:
def ensure_question(s)
  s.end_with?("?") ? s : s+"?"
end

//
def ensure_question(s)
  s.chomp('?') + '?'
end
