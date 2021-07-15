# Palindrome Two
# Have the function PalindromeTwo(str) take the str parameter being passed and return the string 
# true if the parameter is a palindrome, (the string is the same forward as it is backward) 
# otherwise return the string false. The parameter entered may have punctuation and symbols 
# but they should not affect whether the string is in fact a palindrome. For example: 
# "Anne, I vote more cars race Rome-to-Vienna" should return true.

def PalindromeTwo(strParam):

  # code goes here
  #first get rid of all spaces/specialchars
  strParam = ''.join(e for e in strParam if e.isalnum())
  #make it all uppercase
  strParam = strParam.upper()
  chars = len(strParam)
  half = chars//2
  pal = True
  for x in range(half):
    if strParam[x] != strParam[chars-1-x]:
      pal = False
      break
  return pal

# keep this function call here 
print(PalindromeTwo(input()))