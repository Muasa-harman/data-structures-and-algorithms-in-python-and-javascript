# You own a goal parser that can interpret a string command . The command consist of an alphabet of "G".
# "()" and or  "(al)" in some order . The Goal parser will interpret "G" as the string "G" , "()"
# as the string "0", and "(al)" as the string "al". 
# The interpreted strings are then concatenated in the original order
#  Given the string command, return the Goal Parser's interpretation of the command.

# Eg 1:
# Input: command = "G()(al)"
# Output: "Goal"
# Explanation: The Goal Parser interprets the command as follows:
# G -> G
# ()-> 0
# (al)->al

# The final concatenated result is 'Goal'.

#  Example 2:

class Solution:
    def interpret(self, command: str) -> str:
        return command.replace("()", "o").replace("(al)","al")
    
    