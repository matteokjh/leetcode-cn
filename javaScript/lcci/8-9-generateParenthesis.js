/**
 * https://leetcode-cn.com/problems/bracket-lcci/
 * 面试题 08.09. 括号
 * Medium
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    function backtrack(tmp, l, r) {
        if(r === n && l === n) {
            res.push(tmp)
            return
        }
        if(l < n) {
            backtrack(tmp.concat('('), l+1, r)
        }
        if(r < l) {
            backtrack(tmp.concat(')'), l, r+1)
        }
    }
    backtrack('', 0, 0)
    return res
};