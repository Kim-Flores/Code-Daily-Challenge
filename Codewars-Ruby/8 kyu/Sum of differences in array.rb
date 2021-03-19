=begin
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sum_of_differences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
=end

#Solution:
def sum_of_differences(arr)
  if arr.empty? || arr.length == 1 
    return 0 
  else
    sorted = arr.sort{|a,b| b <=> a}
    x = 0
    (sorted.length - 1).times do |index|
      x += (sorted[index] - sorted[index + 1])
    end
      x
  end
end

#other solution:
def sum_of_differences(arr)
  arr.empty? ? 0 : arr.max - arr.min
end
