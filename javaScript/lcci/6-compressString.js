/**
 * https://leetcode-cn.com/problems/compress-string-lcci/
 * 面试题 01.06. 字符串压缩
 * Easy
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    if(!S) return ''
    let res = S[0]
    let tmp = S[0]
    let count = 1
    for(let i=1;i<S.length;i++) {
        if(S[i] === tmp) {
            count++
        } else {
            res += count
            count = 1
            tmp = S[i]
            res += tmp
        }
    }
    res += count
    return res.length < S.length ? res : S
};