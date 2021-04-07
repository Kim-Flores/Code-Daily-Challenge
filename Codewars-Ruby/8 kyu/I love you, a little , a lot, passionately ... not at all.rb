=begin
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, 
saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
=end

#Solution:
def how_much_i_love_you(petals)
puts petals
 arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
 i = petals % arr.length  
 arr.fetch(i - 1)
end

#Other solution:
def how_much_i_love_you(nb_petals)
  options = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
  options[(nb_petals-1) % options.size]
end
