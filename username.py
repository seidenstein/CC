def minLen(strP):
  print("minLen")
  return (len(strP)>3)
def maxLen(strP):
  print ("maxLen")
  return (len(strP)<26)
def FirstCharIsAlpha(strP):
  print("FirstCharIsAlpha")
  return (strP[0].isalpha())
def LastCharIsNotUnderscore(strP):
  print("LastCharIsNotUnderscore")
  return not strP.endswith("_")
def CheckAlnum(strP):
  print("CheckAlnum")
  # we will remove any underscores.
  strP = strP.replace("_","")
  #then check for alnum
  return strP.isalnum()


def CodelandUsernameValidation(strParam):

  # code goes here
 
 if (minLen(strParam) and (maxLen(strParam) and (FirstCharIsAlpha(strParam) and (LastCharIsNotUnderscore(strParam) and (CheckAlnum(strParam)))))):
  strParam = "true"
 else: 
  strParam = "false" 
 
 return strParam

# keep this function call here 
print(CodelandUsernameValidation(input()))


