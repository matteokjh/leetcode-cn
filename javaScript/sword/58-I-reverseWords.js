/**
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 * 面试题58 - I	翻转单词顺序
 * Easy
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reduce((acc,cur)=>cur !== '' ? acc.concat(cur) : acc,[]).reverse().join(' ')
};