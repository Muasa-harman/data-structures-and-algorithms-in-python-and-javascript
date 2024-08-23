# Determine whether an integer is a palindrome.
#  An integer is a palindrome when it reads the same backward as forward

# E.g1:
# Input: 121
# Output: True

# E.g2:
# Input: -121
# Output: false
# Explanation: From left to right, it reads -121.
#  From right to left, it becomes 121-.Therefore it is not a palindrome

# E.g3:
# Input: 10
# Output: False
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome

# Follow up:
# Could you sole it without converting integer to a string
class Solution:
    def isPalindrome(self, x: int)-> bool:
        # solution1:
        # return(str(x) == str(x)[::-1])

        # solution2:
        if x < 0:
            return (False)
        rev_num = 0
        digit = 0

        while(x // (10**digit) !=0):
            rev_num = (rev_num * 10) + x // (10**digit) % 10
            digit += 1
        
        return (x == rev_num)