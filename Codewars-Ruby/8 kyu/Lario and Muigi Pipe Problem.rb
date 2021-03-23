=begin
#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. 
Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence 
after the first index will be greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

#Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8
=end

#Solution
def pipe_fix(nums)
  arr = []
  for i in nums.min..nums.max
   arr << i
  end
  arr
end

#Other solution
def pipe_fix(nums)
    (nums[0]..nums[-1]).to_a
end
