/**
 * https://leetcode-cn.com/problems/bianry-number-to-string-lcci/
 * 面试题 05.02. 二进制数转字符串
 * Medium
 * @param {number} num
 * @return {string}
 */
var printBin = function(num) {
    if(num < 0 || num === ~~num) return 'ERROR'
    return num.toString(2).length < 34 ? num.toString(2) : 'ERROR'
};