# Given an integer n and integer k, output a list of all the combinations of 
# k numbers chosen from 1 to n . E.g if n =3 and k=2,
# [1,2][1,3][2,3]

from itertools import combinations


def generate_combination(n,k):
    # create a range from 1 to n
    numbers = range(1, n+1)

    # use itertools.combination to generate all the combinations of length k
    result = list(combinations(numbers,k))

    return result
# usage
n = 3
k = 2
result = generate_combination(n,k)
print(result)