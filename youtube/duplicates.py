# Given an array, find all the duplicates in this array? E.g
# input:[1,2,3,1,3,6,5] output:[1,3]
def find_duplicates(arr):
    counts = {}
    duplicates = []
    for num in arr:
        if num in counts:
            counts[num]+=1

        else:
            counts[num] = 1

    for key, value in counts.items():
            if value > 1:
                duplicates.append(key)

    return duplicates
input_array = [1,2,3,1,3,6,5]
result = find_duplicates(input_array) 
print(result)          