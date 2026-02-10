# Day-4: Group Anagrams (LeetCode #49)

## 📌 Problem Statement

Given an array of strings, group the anagrams together.

An anagram is a word formed by rearranging the letters of another word using all original letters exactly once.

---

## 🧪 Example

Input:
["eat","tea","tan","ate","nat","bat"]

Output:
[["eat","tea","ate"],["tan","nat"],["bat"]]

---

## 🧠 Approach (Hash Map + Sorted Key)

### Algorithm:

1. Create a hash map
2. For each word:
   - Sort the characters to create a key
   - Push the word into the array mapped by that key
3. Return all values of the map

---

## 💻 JavaScript Solution

```js
var groupAnagrams = function (strs) {
  const map = {};

  for (let word of strs) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }

  return Object.values(map);
};
```
