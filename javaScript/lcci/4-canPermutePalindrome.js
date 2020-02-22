/**
 * https://leetcode-cn.com/problems/palindrome-permutation-lcci/
 * 面试题 01.04. 回文排列
 * Easy
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = {}
    let center = 1
    for(let i=0;i<s.length;i++) {
        if(!map[s[i]]) map[s[i]] = 0
        map[s[i]]++
    }
    for(let [key, val] of Object.entries(map)) {
        if(val % 2) {
            if(center) center = 0
            else return false
        }
    }
    return true
};