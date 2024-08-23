# Roman numerals are represented by seven different symbols: I,V,L,C,D and M.
# Symbol     Value
# I                   1
# V                   5
# L                  50
# C                  100
# D                  500
# M                  1000  
# 
# For example, 2 is written as II in Roman numerals, just two one's added together. 
# 12 is written as xii, which is simply x + II. The number 27 is written as xxvii,which is xx + v + ii.
# 
# Roman numerals are usually written largest to smallest from left to right. However, the  numeral for four is not iiii. 
# Instead, the number four is written as iv. Because the one is before the five is subtracted making four. 
# The same principle applies to number nine, which is written as ix. There are six  where subtraction is used:

# I can be placed before v (5) and x (10) to make 4 and 9
# x can be placed before I. (50) and c (100) to make 40 and 90.
# c can be placed before D (500) and M (1000) to make 400 and 900.

# Given a roman numeral,convert it to an integer

# E.g1:

# Input: s = "III"
# Output: 3

# E.g2:
# Input: s= "IV"
# Output: 4

# E.g3:

# Input: s = "Ix"
# Output: 9

# E.g4:
# Input: s = "LVIII"
# Output: 58
# Explanation: L = 50, V = 5, III=3
# 
# E.g5:
# Input: s = "MCMxCIV"
# Output: 1994
# Explanation: M = 1000,CM = 900, xc =90 and IV = 4

class Solution:
    def romanToInt(self, s: str) -> int:
        
        roman_table = {
            "I": 1,
            "V": 5,
            "x": 10,
            "L":0,
            "C": 100,
            "D":500,
            "M":1000
        }
        # string conversion method
        convert = {
            "IV":"IIII","Ix":"VIIII","xl":"xxxx","xc":"Lxxxx",
            "CD":"CCCC","CM":"DCCCC"
        }
        for k,v in convert.items():
            s = s.replace(k,v)

        return sum([roman_table[numeral] for numeral in s])    

        # # Reverse iteration solution
        # num = 0
        # last = "I"

        # for numeral in s[::-1]:
        #     if roman_table[numeral] < roman_table[last]:
        #         num -= roman_table[numeral]

        #     else:
        #         num += roman_table[numeral]
        #     last = numeral
        # return num            