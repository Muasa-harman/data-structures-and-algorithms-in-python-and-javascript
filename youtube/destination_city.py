# 1436
# You are given the array paths , where paths[i] = [cityA,cityB]
# mean there exists a direct path going from cityA to cityB.
# Return the destination city that is the city without any path outgoing to another city

# It is guaranteed that the graph of the paths forms a line without any loop,there will be exactly one destination city
# 
# Eg
# Input: paths = [["London", "New york"],["New york", "Nairobi"],["Nairobi","Abuja"]]
# Output: "Abuja"
# Explanation: Starting at "London" city will reach "Abuja" city which is the destination city. You trip consist 
# of: "London" -> "New york" -> "Nairobi" -> "Abuja".
# 
# Eg
# Input paths = [["B","C"], ["D","B"],["C","A"]]
# output: "A" 


class Solution:
    def destCity(self,paths: list[list[str]]) -> str:
        outgoing_count = {}
        for path in paths:
            city_a, city_b = path
            outgoing_count[city_a] = outgoing_count.get(city_a,0) + 1
            outgoing_count[city_b] = outgoing_count.get(city_b,0)

        for city in outgoing_count:
            if outgoing_count[city] == 0:
               return city    