=begin
Instructions:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
=end

#solution:
def maps(x)
  x.map {|element| element * 2}
end

#other solutions:
def maps(x) x.map {|n| n * 2 } end

def maps(x)
  x.map { |index| index*2}
end
