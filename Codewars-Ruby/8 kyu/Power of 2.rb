=begin
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
=end

#Solution:
def powers_of_two(n)
  arr = []
  (n + 1).times do |i|
    arr << 2 ** i
  end
  arr
end

#Other solution:
def powers_of_two(n)
  (0..n).map { |k| 2**k }
end