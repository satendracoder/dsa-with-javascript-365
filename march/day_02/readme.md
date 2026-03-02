# Day 02_March – Intersection of Two Arrays

Given two integer arrays nums1 and nums2,
return an array of their intersection.

Each element in the result must be unique.
You may return the result in any order.

## Example

Input: nums1 = [1,2,2,1], nums2 = [2,2]  
Output: [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]  
Output: [9,4]

## Approach

- Convert nums1 into a Set
- Traverse nums2
- If element exists in set:
    - Add to result
    - Remove from set (to maintain uniqueness)

## Complexity

Time Complexity: O(n + m)  
Space Complexity: O(n)

## LeetCode
Intersection of Two Arrays (Easy)
