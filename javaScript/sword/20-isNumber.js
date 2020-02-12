/**
 * https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
 * 面试题20. 表示数值的字符串
 * Medium
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s !== ' ' && !isNaN(+s)
};