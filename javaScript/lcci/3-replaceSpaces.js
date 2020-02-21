/**
 * https://leetcode-cn.com/problems/string-to-url-lcci/
 * 面试题 01.03. URL化
 * Easy
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    return S.substr(0,length).split(' ').join('%20')
};