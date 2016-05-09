/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  "use strict"
  let table = []
  for (let num of nums) {
      if (table[num] === undefined) {
          table[num] = 1
      } else {
          table[num] ++
      }
      
      if (table[num] >= nums.length / 2) {
          return num
      }
  }
};