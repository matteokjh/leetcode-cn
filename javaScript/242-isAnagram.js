/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * 有效的字母异位词
 * Easy
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let m = {}
    let count = 0
    s.split('').forEach(e=>{
        if(!m[e]) {
            m[e] = 0
            count++
        }
        m[e]++
    })
    for(let i=0;i<t.length;i++) {
        if(!m[t[i]]) return false
        m[t[i]]--
        if(m[t[i]] === 0) count--
    }
    return count ? false : true
};