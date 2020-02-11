/**
 * https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * 整数的各位积和之差
 * Easy
 * 
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return n.toString().split('').reduce((acc,cur)=>acc * cur,1) - n.toString().split('').reduce((acc,cur)=>acc+ +cur,0)
};