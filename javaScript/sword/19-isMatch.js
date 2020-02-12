/**
 * https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/
 * 面试题19. 正则表达式匹配
 * Hard
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = {}
    function recursive(i,j) {
        if(memo[[i,j]] !== undefined) return memo[[i,j]]
        if(j === p.length) return i === s.length
        let tmp = i < s.length && (s[i] === p[j] || p[j] === '.')
        let ans = false
        if(p[j+1] === '*') {
            ans = recursive(i,j+2) || tmp && recursive(i+1,j)
        } else {
            ans = tmp && recursive(i+1,j+1)
        }
        memo[[i,j]] = ans
        return ans
    }
    return recursive(0,0)
};