import random
import sys

arr = [[0,0,0,0,0], 
       [0,0,0,0,0],
       [0,0,0,0,0],
       [0,0,0,0,0],
       [0,0,0,0,0]]

count = 0



while count < int(sys.argv[1]):
  row = random.randint(0, 4)
  column = random.randint(0, 4)
  if arr[row][column] == 1:
      continue
  else:
     arr[row][column] = 1
     count += 1 

print(
    arr
    )