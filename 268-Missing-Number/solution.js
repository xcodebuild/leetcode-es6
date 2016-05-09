/**
 * @param {number[]} nums
 * @return {number}
 */
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