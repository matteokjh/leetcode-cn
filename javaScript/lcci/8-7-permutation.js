/**
 * https://leetcode-cn.com/problems/permutation-i-lcci/
 * 面试题 08.07. 无重复字符串的排列组合
 * Medium
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    let res = []
    let len = S.length
    function backtrack(i, tmp, isRead) {
        if(i >= len) return
        if(tmp.length === len) {
            res.push(tmp)
            return
        }
        for(let j=0;j<len;j++) {
            if(isRead[j]) continue
            isRead[j] = 1
            backtrack(j, tmp + S[j], isRead)
            isRead[j] = 0
        }
    }
    backtrack(0, '', {})
    return res
};