# Rotate a list to the right by k places, where k is non-negative.
#  E.g Input: [1,2,3,4,5], k =2. Output:[4,5,1,2,3]

def rotate_list(nums,k):
    n = len(nums)
    if n == 0:
        return nums
    
    # Normalise k to avoid unnecessary full rotation
    k = k % n

    # Perform the rotation
    rotated_list = nums[-k:] + nums[:-k]
    return rotated_list

#    Eg
input_list = [1,2,3,4,5]
k = 2
output_list = rotate_list(input_list, k)
print(output_list)