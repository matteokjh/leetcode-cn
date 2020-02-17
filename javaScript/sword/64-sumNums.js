/**
 * https://leetcode-cn.com/problems/qiu-12n-lcof/
 * 面试题64. 求1+2+…+n
 * Medium
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return (n**2 + n) >> 1
};