/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * 验证回文串
 * Easy
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = []
    for(let i=0;i<s.length;i++) {
        if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
            a.push(s[i].toLowerCase())
        } else if(s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57 || s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) a.push(s[i])
    }
    let i=0
    let j=a.length-1
    while(i < j) {
        if(a[i] !== a[j]) return false
        i++
        j--
    }
    return true
};