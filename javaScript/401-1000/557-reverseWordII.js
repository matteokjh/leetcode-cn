/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
 * 反转字符串中的单词II
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(e=>e.split('').reverse().join('')).join(' ')
};