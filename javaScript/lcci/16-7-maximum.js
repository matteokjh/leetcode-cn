/**
 * https://leetcode-cn.com/problems/maximum-lcci/
 * 面试题 16.07. 最大数值
 * Easy
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
    let k = Math.abs(a-b)
    return (a + b + k) / 2
};