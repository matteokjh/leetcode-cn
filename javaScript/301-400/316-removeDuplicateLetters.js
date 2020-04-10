/**
 * https://leetcode-cn.com/problems/remove-duplicate-letters/
 * 316. 去除重复字母
 * Hard
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if(~stack.indexOf(s[i])) continue
        while(stack.length && s[i].charCodeAt() < stack[stack.length-1].charCodeAt() && ~s.substring(i).indexOf(stack[stack.length-1])) {
            stack.pop()
        }
        stack.push(s[i])
    }
    return stack.join("")
};