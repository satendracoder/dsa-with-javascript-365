# Day 10_March – Longest Consecutive Sequence

Given an unsorted array of integers nums,
return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

## Example

Input: nums = [100,4,200,1,3,2]  
Output: 4  
Explanation: The longest consecutive sequence is [1,2,3,4].

Input: nums = [0,3,7,2,5,8,4,6,0,1]  
Output: 9

## Approach

- Store all numbers in a Set
- Iterate through each number
- Only start counting if (num - 1) does not exist
- This means it's the start of a sequence
- Keep counting num + 1, num + 2... until sequence breaks
- Track maximum length

## Complexity

Time Complexity: O(n)  
Space Complexity: O(n)

## LeetCode
Longest Consecutive Sequence (Medium)
