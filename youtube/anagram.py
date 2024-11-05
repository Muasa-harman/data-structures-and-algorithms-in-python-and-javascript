# Given an array of strings, group anagrams together
# E.g: input ["eat","tea","tan","ate","nat","bat"]
# output:[["ate","eat","tea",], ["nat","tan"],["bat"]]
def group_anagrams(words):
    anagram_dict = {}


    # group words by sorted characters
    for word in words:
        sorted_word = ''.join(sorted(word))
        if sorted_word not in anagram_dict:
            anagram_dict[sorted_word] = [word]
        else:
            anagram_dict[sorted_word].append(word)

            #extract the group into a list
    result = list(anagram_dict.values())
    return result

# Eg:
input_words = ["eat", "tea","tan","ate","nat","bat"]
output_group = group_anagrams(input_words)
print(output_group)  