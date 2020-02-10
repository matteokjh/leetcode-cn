/**
 * https://leetcode-cn.com/problems/decode-ways/
 * 解码方法
 * Medium
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let len = s.length
    if(!s || s[0] === '0') return 0
    let pre = 1
    let cur = 1
    for(let i=0;i<len;i++) {
        if(s[i] === '0') {
            if(s[i-1] === '1' || s[i-1] === '2') { // 有0且前一位为1或2
                cur = pre
            } else return 0
        } else {
            if(s[i-1] === '1' || s[i-1] === '2' && s[i] >= '1' && s[i] <= 6) {
                let tmp = cur
                cur += pre
                pre = tmp
            } else {
                pre = cur
            }
        }
    }
    return cur
};