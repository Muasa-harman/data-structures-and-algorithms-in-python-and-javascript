# Given an array of integers, return indices of two numbers such that they add up to specific target.

# You may assume that each input would have exactly one solution, 
# and you may not use the same element twice.

# E.g
# Given nums = [2,7,11,15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0,1]
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
    # # solution1    # iterate through the list of numbers with a double loop. Brute force. O(n^2)
    #     for i in range(len(nums)-1):
    #         for j in range(i+1, len(nums)):
    #             if nums[i] + nums[j] == target:
    #                 return([i,j])


    # solution2    # Dictionary storage. O(n)
        seen = {}
        for i, num in enumerate(nums):
            if target - num in seen:
                return([seen[target -  num], i])
            elif num not in seen:
                seen[num] = i