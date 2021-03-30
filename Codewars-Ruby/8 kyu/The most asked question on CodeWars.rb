=begin
What is the most asked question on CodeWars?

Can someone explain /*...*/?

You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

Let's hope you don't write a solution that makes people ask that question at you!
=end

#Solution:
def detect(comment)
  comment.start_with?('Can someone explain ')
end

#other solution:
def detect(comment)
 comment.split(" ")[0..2] == ['Can', 'someone', 'explain']    
end
