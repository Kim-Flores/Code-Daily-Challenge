=begin
Instructions:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
=end

#Solutions:
def abbrev_name(name)
  split = name.split(' ')
  p split[0].chars.first.capitalize + "." + split[1].chars.first.capitalize
end

#Other Solution:
def abbrev_name(name)
  name.split.map { |s| s[0]}.join('.').upcase
end
