/**
 * https://leetcode-cn.com/problems/flipped-string-lcci/
 * 面试题 01.09. 字符串轮转
 * Easy
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
    return s1.length === s2.length && (s2 + s2).indexOf(s1) > -1
};