/**
 * https://leetcode-cn.com/problems/check-permutation-lcci/
 * 面试题 01.02. 判定是否互为字符重排
 * Easy
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if(s1.length !== s2.length) return false
    let m = {}
    for(let i=0;i<s1.length;i++) {
        if(!m[s1[i]]) m[s1[i]] = 0
        m[s1[i]]++
    }
    for(let i=0;i<s2.length;i++) {
        if(!m[s2[i]]) return false
        m[s2[i]]--
        if(m[s2[i]] < 0) return false
    }
    return true
};