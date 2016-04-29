/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    "use strict"
    let left = 0
    let right = nums.length
    let mid
    while (left < right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}