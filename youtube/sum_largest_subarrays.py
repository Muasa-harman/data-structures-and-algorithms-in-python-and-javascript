# Given an integer array, find the sum of the largest contiguous subarray within the array. 
# E.g array A = [0,-1,-5,-2,3,14] it should return 17 because of [3,14].
#  Note that if all the elements are negative it should return 0
def max_subarray_sum(nums):
    # initialise the variables to track the current sum and the best sum found
    current_sum = 0
    max_sum = 0

    # Traverse through the array updating the current sum and max sum accordingly
    for num in nums:
        # Update the current sum, reset it to 0 if it becomes negative
        current_sum += num
        if current_sum < 0:
            current_sum = 0

         #update the maximum sum found so far
        max_sum = max(max_sum, current_sum)

    return max_sum   

# eg usage
array = [0,-1,-5,-2,3,14]
result = max_subarray_sum(array)
print(result)   