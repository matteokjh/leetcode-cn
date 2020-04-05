/**
 * https://leetcode-cn.com/problems/valid-number/
 * 65. 有效数字
 * Hard
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s !== ' ' && !isNaN(+s)
};