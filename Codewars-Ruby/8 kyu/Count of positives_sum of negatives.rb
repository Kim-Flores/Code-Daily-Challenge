=begin
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
=end

#Solution:
def count_positives_sum_negatives(lst)
  if lst.length == 0 
    return []
  end
  pos = []
  sum = []
  lst.each do |element|
    if element.negative?
    sum << element
    elsif
      element > 0
      pos << element
    end
  end
  sum.reduce(:+) == nil ? [pos.length, 0] : [pos.length, sum.reduce(:+)] 
end

#other solution:
def count_positives_sum_negatives(lst)
  return [] if lst.nil? || lst.empty?
  [lst.count(&:positive?), lst.select(&:negative?).reduce(0, :+)]
end
