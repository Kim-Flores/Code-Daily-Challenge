=begin
Instructions:
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
=end

#Solution:
def get_grade(s1, s2, s3)
  score = (s1 + s2 + s3) / 3
  if score <= 100 && score >= 90 
    "A"
  elsif score >= 80 && score < 90
    "B"
  elsif score >= 70 && score < 80
    "C"
  elsif score >= 60 && score < 70
    "D"
  else
    "F"
    end
end

#shorter solution:
def get_grade(s1, s2, s3)
  case (s1 + s2 + s3).fdiv 3
  when 90..100 then 'A'
  when 80...90 then 'B'
  when 70...80 then 'C'
  when 60...70 then 'D'
  else 'F'
  end
end
