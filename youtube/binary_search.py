# Given a sorted(in ascending order), integer array nums of
#  n elements and a target value,write a function to search target in nums.
#  If target exits, then return its index. Otherwise return -1 .

# Eg1
# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4

# Eg2
# Input: nums = [-1,0,3,5,9,12], target = 2
# Output: -1
# Explanation: 2 does not exist in nums so return -1

class Solution:
    def search(self,nums:list[int],target: int)-> int:
         start = 0
         end = len(nums) - 1
         mid = (start + end) // 2


         while start < end:
              mid = (start + end) // 2
              num = nums[mid]
              if target == num:
                   return mid
              

              if target > num:
                   start = mid + 1

              elif target < num:
                   end = mid - 1  
         return -1          


        # option
        # for i, num in enumerate(nums):
        #     if num == target:
        #         return i
        #     return -1 
        
        # solutions
        # nums = [-1,3,4,6,8,9,12,15,10]  target = 9
        # start = 0
        # end = 0
        # middle = (start + end) / 2


        # start = 4
        # end = 8
        # mid = 6

        # start = 4
        # end = 6
        # mid = 5 return

        # start =5
        # end = 6