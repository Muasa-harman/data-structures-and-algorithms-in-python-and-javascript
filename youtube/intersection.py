# Given two arrays,
#  write a  python function to
# return the intersection of the two?
#  E.g:y = [1,5,9,0] and m = [3,0,2,9] it should return [9,0]

# class Solution:
#     def intersection_arr(arrayA,arrayB):
#         set1 = set(arrayA)
#         set2 = set(arrayB)


#         set3 = set1.intersection(set2)
#         return list(set3)
    

#     y = [1,5,9,0]
#     m = [3,0,2,9]
#     res = intersection_arr(y,m)
#     print(intersection_arr())



# q2
# Given two arrays, write a python function to
# return the intersection of the two? E.g, x=[1,5,9,0] and Y = [3,0,2,9] it should 
# return [9,0]

def intesect_arr(arr1,arr2):
   set1 = set(arr1)
   set2 = set(arr2)


   Sets = set1.intersection(set2)
   return list(Sets)
x = [1,5,0,9]
y = [3,0,2,9]
res= intesect_arr(x, y)
print(res)

    
    
