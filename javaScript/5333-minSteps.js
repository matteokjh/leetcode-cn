/**
 * https://leetcode-cn.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * 制造字母异位词的最小步骤数
 * Medium
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let m = {}
    let count = 0
    for(let letter of s.split('')) {
        if(!m[letter]) m[letter] = 0
        m[letter]++
    }
    for(let k of t.split('')) {
        if(m[k]) {
            m[k]--
        } else {
            count++
        }
    }
    return count
};