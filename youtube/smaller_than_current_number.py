# Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
#  That is, for each nums[i] you have to count the number of valid j's such that j != and nums[j] < nums[i]

# Return the answer in an array

# E.g
# input: nums = [8,1,2,2,3]
# Output: [4,0,1,1,3]
# Explanation:
# For nums[0]=8 there exist four smaller numbers than it(1,2,2 and 3).
# For nums[1]=1 does not exist any smaller number than it .
# For nums[2]=2 there exist one smaller number than it(1)
# For nums[3]=2 there exist one smaller number than it (1)
# For nums[4]=3 there exist three smaller numbers than it(1,2 and 2)


# class Solution:
#     def smallerNumbersThanCurrent(self, nums: list[int])-> list[int]:
#         output = []
#         for i in range(len(nums)):
#             count = 0
#             for j in range (len(nums)):
#                 if j != i and nums[j] < nums[i]:
#                     count += 1
#             output.append(count)  
#         return output


class Solution:
    def SmallerNumbersThanCurrent(self,nums: list[int])->list[int]:
        sorted_nums = sorted(nums,reverse=True)
        list_count = {}
        for i in range (len(sorted_nums)-1):
            curr_num = sorted_nums[i]
            next_num = sorted_nums[i+1]
            if next_num < curr_num:
                remaining_value = len(sorted_nums)-(i + 1)
                list_count[curr_num] = remaining_value

        list_count[sorted_nums[-1]] = 0
        output = []
        for num in nums:
            output.append(list_count[num])

        return output         