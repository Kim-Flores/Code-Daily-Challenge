=begin
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
=end

#Solution:
def correct_polish_letters(s)
  puts s
  alpha = {
  'ą' => 'a',
  'ć' => 'c',
  'ę' => 'e',
  'ł' => 'l',
  'ń' => 'n',
  'ó' => 'o',
  'ś' => 's',
  'ź' => 'z',
  'ż' => 'z' 
  }
  split = s.split('')
  result = []
  split.each do |char|
    if !alpha.include?(char)
      result << char
    else
       result << alpha[char]
     end
    end
  result.join('')
end

#other solution:
def correct_polish_letters(s)
  s.tr("ąćęłńóśźż", "acelnoszz")
end
