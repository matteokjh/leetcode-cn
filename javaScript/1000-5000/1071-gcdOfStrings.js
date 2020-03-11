/**
 * https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/
 * 1071. 字符串的最大公因子
 * Easy
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 辗转相除
    function gcd(a,b) {
        while(b) {
            let t = a % b
            a = b
            b = t
        }
        return a
    }
    if(str1 + str2 !== str2 + str1) return ''
    let resLen = gcd(str1.length, str2.length)
    return str1.substr(0, resLen)
};