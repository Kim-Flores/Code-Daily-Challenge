=begin
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
=end

#Solution:
def create_array(n)
  res = []
  i = 1
  while i <= n do
    res << i
    i += 1
  end
  return res
end

#other solution:
def create_array(n)
  Array(1..n)
end
