/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums){
    "use strict"
    let table = {}
    for(let num of nums){
        if(!table[num]){
            table[num] = true
        }else{
            return true
        }
    }
    return false
}