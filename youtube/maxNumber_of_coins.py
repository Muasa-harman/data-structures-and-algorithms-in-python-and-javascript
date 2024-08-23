# 1561
# There are 30 piles of coins of varying size, you and your friends will take piles of coins as follows

# In each step,you will choose any 3 piles of coins(not necessarily consecutive)
# Of your choice . Alice will pick the pile with the miximum number of coins
# You will pick the next pile with the maximum number of coins
# You friend bob will pick the last pile
# Repeat until there is no more pile if coins

# Given an array of integers piles where piles[i] is the number of coins in the ith pile

# Return the maximum number of coins which you can have:

# E.g1:
# Input: piles = [2,4,1,2,7,8]
# Output: 9
# Explanation: Choose the triplet(2,7,8), Alice pick the pile with 8 coins, you the pile with 7 coins Bob
# the last one
# Choose the triplet (1,2,4), Alice Pick the pile with 4 coins, you the piles with 2 coins and Bob the last one
# The maximum number of coins which you can have are: 7 + 2 = 9.
# On the other hand if we choose this arrangement (1,2,3),(2,4,7) you only get 2 + 4 = 6 coins which i not optimal.
# 
# E.g2:
# Input: piles = [2,4,5]
# Output: 4

# E.g3:

class Solution:
    def maxCoins(self,piles: list[int])->int:
        sorted_piles = sorted(piles)
        end_index = len(piles)-1
        our_value = 0
        for i in range(len(piles)//3):
            our_value += sorted_piles[end_index-(i*2)-1]
        return our_value    
            # triplet = (sorted_piles[i], sorted_piles[end_index-(i *2)],)
        # [2,4,1,6,7,8,3,5,9]
# sort
        # [1,2,3,4,5,6,7,8,9]
        # most optimal
        # [8,9,1]
        # biggest numbers
        # [6,7,2]
        # last numbers
        # [3,4,5]
        pass
