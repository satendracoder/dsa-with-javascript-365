# Day 11_Feb – Merge Sorted Array

You are given two sorted arrays nums1 and nums2.
Merge nums2 into nums1 as one sorted array.

Note:
- nums1 has size m + n
- First m elements are valid
- nums2 has n elements

## Example

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

Output:
[1,2,2,3,5,6]

## Approach

- Start merging from the end
- Use three pointers:
  - i = m - 1
  - j = n - 1
  - k = m + n - 1
- Compare from back and place larger value at k

Why from back?
Because nums1 already has extra space at the end.

## Complexity

Time Complexity: O(m + n)
Space Complexity: O(1)

## LeetCode
Merge Sorted Array (Easy)
