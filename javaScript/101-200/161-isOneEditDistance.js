/**
 * https://leetcode-cn.com/problems/one-edit-distance/
 * 161. 相隔为 1 的编辑距离
 * Medium
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    let dis = t.length - s.length
    if(dis < 0) {
        [s,t] = [t,s]
        dis = -dis
    }
    if(dis > 1) return false
    let i = 0
    while(i < s.length && s[i] === t[i]) i++
    if(i === s.length) return dis === 1
    if(!dis) i++
    while(i < s.length && s[i] === t[i+dis]) i++
    return i === s.length
};