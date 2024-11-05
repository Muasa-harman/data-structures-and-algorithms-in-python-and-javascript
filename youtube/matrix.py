# Given an m-by-n matrix with positive integer,
#  determine the length of the longest path of increasing within the matrix 
def longest_increasing_path(matrix):
    if not matrix or not matrix[0]:
        return 0
    
    def dfs(i,j):
        # if already computed, return the cached value
        if memo[i][j] != 0:
            return memo[i][j]
        
        # Explore all four possible directions
        directions = [(0,1),(1,0),(0,1),(1,0)]
        max_length = 1 ##Minimum path length is 1(itself)
        for di,dj in directions:
            ni,nj = i + di, j + dj
            if 0 <= ni < n and 0 <= nj < n and matrix[ni][nj] > matrix[i][j]:
                max_length = max(max_length, 1 + dfs(ni,nj))
 
        memo[i][j] = max_length #cache result
        return max_length