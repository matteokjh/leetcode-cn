/**
 * https://leetcode-cn.com/problems/longest-palindrome/
 * 409. 最长回文串
 * Easy
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let a = new Set()
    let res = 0
    for(let i=0;i<s.length;i++) {
        if(a.has(s[i])) {
            res += 2
            a.delete(s[i])
        } else a.add(s[i])
    }
    return a.size ? res + 1 : res
};