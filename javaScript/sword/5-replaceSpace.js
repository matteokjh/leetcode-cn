/**
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * 面试题05. 替换空格
 * Easy
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.split(' ').join('%20')
};