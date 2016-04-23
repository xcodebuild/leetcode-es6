/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    'use strict'
    const VOWELS = 'aeiouAEIOU'
    let result = []
    let vowels_arr = []

    for (let ch of s) {
        if (VOWELS.indexOf(ch) !== -1) {
            vowels_arr.push(ch)
        }
    }
    
    let index = vowels_arr.length - 1
    for (let ch of s) {
        if (VOWELS.indexOf(ch) !== -1) {
            result.push(vowels_arr[index])
            index --
        } else {
          result.push(ch)  
        }
    }

    return result.join('')
};