# Day 23_Feb – String Compression

Given an array of characters chars, compress it using the following algorithm:

- Begin with an empty string s.
- For each group of consecutive repeating characters:
    - Append the character
    - Append the count if greater than 1
- The compressed string must be written back into the input array.
- Return the new length of the array.

You must do this in-place with O(1) extra space.

## Example

Input: chars = ["a","a","b","b","c","c","c"]  
Output: 6  
Compressed array: ["a","2","b","2","c","3"]

Input: chars = ["a"]  
Output: 1

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]  
Output: 4  
Compressed array: ["a","b","1","2"]

## Approach

- Use two pointers:
  - i → read pointer
  - index → write pointer
- Count consecutive characters
- Write character
- If count > 1, write digits of count
- Return final write index

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
String Compression (Medium)
