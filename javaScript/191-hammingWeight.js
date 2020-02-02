/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 位1的个数
 * Easy
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return ((n.toString(2)).match(/1/g) || []).length
};