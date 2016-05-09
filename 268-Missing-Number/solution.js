/**
 * @param {number[]} nums
 * @return {number}
 */
/*
 * Liner extra space complexity solution
var missingNumber = function(nums) {
    "use strict";
    let table = []
    for(let i = 0; i < nums.length; i++) {
        table[nums[i]] = true
    }
    
    let i = 0;
    for(i = 0; i < table.length; i++) {
        if (table[i] !== true) {
           return i 
        } 
    }
    return i
};
*/

// Constant extra space complexity solution
var missingNumber = function(nums) {
    "use strict";
    let len = nums.length
    let wholeSum = (0 + len)*(len + 1) / 2
    let offset = wholeSum - nums.reduce(function(x, y){return x + y})
    return offset
};