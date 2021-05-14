=begin
Instructions:
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
Note: the input will not be empty.
Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
https://www.codewars.com/kata/5809b62808ad92e31b000031
=end

#Solution
def calculate(str)
  eval(str.gsub('plus', '+').gsub('minus', '-')).to_s
end

#other solution:
def calculate(s)
 s = s.gsub('plus', '+')
 s = s.gsub('minus','-')
 eval(s).to_s
end
