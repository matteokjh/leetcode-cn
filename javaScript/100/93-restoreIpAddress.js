/**
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 * 93. 复原IP地址
 * Medium
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []
    if(s.length > 12) return []
    function backtrack(i, tmp, arr) {
        if(i >= s.length) {
            if(arr.length === 4) res.push(arr.join('.'))
            return
        }
        tmp += s[i]
        if(tmp[0] === '0' && tmp.length > 1 || +tmp > 255) return
        backtrack(i+1, '', arr.concat(tmp))
        if(i+1 < s.length) {
            backtrack(i+1, tmp, arr)
        }
    }
    backtrack(0, '', [])
    return res
};