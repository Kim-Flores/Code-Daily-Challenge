=begin
Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.
=end

#Solution:
def take list, n
  list.slice(0,n)
end

#other solution:
def take list, n
  list.take(n)
end
