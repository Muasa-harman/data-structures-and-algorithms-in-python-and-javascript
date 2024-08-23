# Given n non-negative integers a1,a2,...,an, where each represents a 
# point at coordinate (i,a).n vertical lines are drawn such that the two endpoints of line i is at (i,a) and(i,0).
# Find two lines, which together with x-axis form a container, such that the container contains the most water

# Note: You may not slant the container and n is at least 2 

class Solution:
    def maxArea(self,height: list[int]) -> int:
        start = 0
        end= len(height) -1
        largest = 0
        # prev_Start = 0
        # prev_end = 0

        while start != end:

            # if height[start] < prev_Start:
            #     start += 1
            #     continue
            # if height[end] < prev_end:
            #     end -= 1
            #     continue
            
            next_area = min(height[start], height[end]) * (end -start)

            if next_area > largest:
                largest = next_area

            if height[start] < height[end]:
                # prev_start = height[start]
                start += 1

            else:
                # prev_end = height[end]
                end -= 1
        return(largest)                