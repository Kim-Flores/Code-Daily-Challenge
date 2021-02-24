=begin
Instructions:
What could be easier than comparing integer numbers? 
However, the given piece of code doesn't recognize some of the special numbers for a reason to be found. Your task is to find the bug and eliminate it.
=end

#Solution:
def what_is(x)
  puts x
  if x.equal?(42)
    'everything'
  elsif x == (42 ** 42)
    'everything everythinged'
  else
    'nothing'
  end
end
