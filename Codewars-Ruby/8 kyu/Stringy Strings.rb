=begin
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
=end

#Solution
def stringy(size)
 x = (1..size).to_a
 result = []
  x.each {|item| item % 2 != 0 ? result << 1 : result << 0}
  result.join("")
end

#Other solution:
def stringy(size)
  (1..size).map { |i| i.even? ? '0' : '1' }.join('')
end
