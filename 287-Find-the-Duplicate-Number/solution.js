/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    "use strict"
    let table = []
    for (let num of nums) {
        if (!table[num]) {
            table[num] = true
        } else {
            return num
        }
    }
};