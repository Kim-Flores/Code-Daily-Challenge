=begin
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
=end

#Solution:
def no_boring_zeros(num)
 result = num.to_s.gsub(/0+$/,'')
 result.to_i
end

#other solution:
def no_boring_zeros(num)
  # Place code - get rid of zeros - receive bacon
  num.to_s.gsub(/[0]+$/,"").to_i
 
end




