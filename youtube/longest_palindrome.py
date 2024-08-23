# Given a string which consist of lowercase or uppercase letters. Return the length of the longest palindrome
# that can be build with those letters
# Letters are case sensitive e.g "Aa" is not considered a palindrome here.

# Eg1
# Input: s = "abccccdd"
# Output: 7
# Explanation:
# One longest palindrome that can be built is "dccaccd", whose
# length is 7.

# Eg2:
# Input: s = "a"
class Solution:
    # solution1

    # def longestPalindrome(self,s:str)-> int:
    #     char_count = {}
    #     for char in s:
    #         char_count[char] = char_count.get(char,0) + 1
    #     final_count = 0
    #     odd_is_present = False

    #     for char in char_count:
    #         if char_count[char] %  2 == 0:
    #             final_count +=char_count[char]
    #         else:
    #             final_count += (char_count[char]-1)
    #             odd_is_present = True

    #     if odd_is_present:
    #         final_count += 1

    #     return final_count 
    # 
    # solution2
    def longestPalindrome(self,s: str)-> str:
      def check_pali(s):
            return(s == s[::-1])  

    #   check all substrings
      for length in range(len(s),0,-1):
            for start_index in range(0, len(s)+1-length):
                  if check_pali(s[start_index:(start_index+length)]):
                        return s[start_index:(start_index+length)]