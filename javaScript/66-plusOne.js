/**
 * https://leetcode-cn.com/problems/plus-one/
 * 加一
 * Easy
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let inc = false
    if(digits[digits.length-1] === 9) {
        inc = true
        digits[digits.length-1] = 0
    } else {
        digits[digits.length-1]++
    }
    for(let i=digits.length-2;i>=0;i--) {
        if(inc){
             digits[i]++
            inc = false
        }
        if(digits[i] === 10) {
            digits[i] = 0
            inc = true
        }
    }
    if(inc) {
        digits = [1,...digits]
    }
    return digits
};