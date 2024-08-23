# Given a string, find the length of the longest substring without repeating characters.

# E.g1
# Input: "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# E.g2:
# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with thee length of 1.

# E.g3:
# Input: "pwwkew"
Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Note that the answer must be a substring, "pwke" is a subsequence and not a substring

class Solution:
    def lengthOfLongestSubstring(self, s: str)-> int:
        subStr = {}
        curr_sub_start = 0
        cur_length = 0
        longest = 0

        for i, letter in enumerate(s):
            if letter in subStr and subStr[letter] >= curr_sub_start:
                curr_sub_start = subStr[letter] + 1
                cur_length = i - subStr[letter]
                subStr[letter] = i
            else:
                subStr[letter] = i
                cur_length += 1
                if cur_length > longest:
                    longest = cur_length

        return(longest)             
