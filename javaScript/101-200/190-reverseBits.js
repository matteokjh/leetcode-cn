/**
 * https://leetcode-cn.com/problems/reverse-bits/
 * 颠倒二进制位
 * Easy
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return Number.parseInt(n.toString(2).padStart(32,0).split('').reverse().join(''), 2);
};