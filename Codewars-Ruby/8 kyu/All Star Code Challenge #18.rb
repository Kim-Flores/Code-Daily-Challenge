=begin
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

str_count('Hello', 'o') # => 1
str_count('Hello', 'l') # => 2
str_count('', 'z')      # => 0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
=end

#Solution
def str_count(word, letter)
  count = 0
  split = word.split("")
  split.each {|char|
   char.include?(letter) ? count += 1 : 0
    }
  count
end

#other solution
def str_count(word, letter)
  word.count(letter)
end
