=begin
Given a string that looks like a hash, turn it into a hash!

Given input string:

"{:a=>1, :b=>2, :c=>3}"

Desired output:

{:a=>1, :b=>2, :c=>3}
=end

#solution:
def hashy_string_to_hash(str)
 eval(str)
end
