/**
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * 面试题50. 第一个只出现一次的字符
 * Easy
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let t = new Array(26).fill(0)
    let code = ('a').charCodeAt()
    for(let i=0;i<s.length;i++) {
        t[s[i].charCodeAt() - code]++
    }
    for(let i=0;i<s.length;i++) {
        if(t[s[i].charCodeAt() - code] === 1) return s[i]
    }
    return ' '
};