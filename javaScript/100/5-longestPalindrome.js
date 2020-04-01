/**
 * https://leetcode-cn.com/submissions/detail/12548793/
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expand(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return right - left - 1
    }
    let start = 0
    let end = 0
    for(let i=0;i<s.length;i++) {
        let a = expand(i, i)
        let b = expand(i, i+1)
        let maxLen = Math.max(a, b)
        if(maxLen > end - start) {
            start = i - ~~((maxLen-1) / 2)
            end = i + ~~(maxLen / 2)
        }
    }
    return s.substring(start, end+1)
};