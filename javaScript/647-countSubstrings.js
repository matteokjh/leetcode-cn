/**
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 回文子串
 * Medium
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length
    let res = len
    s = s.split('')
    for(let i=2;i<=len;i++) {
        for(let j=0;j+i<=len;j++) {
            let state = true
            let end = i+j-1
            for(let k=0;k<~~(i/2);k++) {
                if(s[j+k] === s[end-k]) continue
                else {
                    state = false
                    break
                }
            }
            if(state) res++
        }
    }
    return res
};