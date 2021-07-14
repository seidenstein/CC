# Alphabet Soup
# Have the function AlphabetSoup(str) take the str string parameter being passed and return 
# the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers 
# and punctuation symbols will not be included in the string.

def AlphabetSoup(strParam):

# code goes here
  return "".join(sorted(strParam))

# keep this function call here 
print(AlphabetSoup(input()))