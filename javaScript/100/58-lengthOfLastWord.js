/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * 最后一个单词的长度
 * Easy
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = 0
    let state = 0
    for(let i=s.length-1;i>=0;i--) {
        if(!state) {
            if(s[i] === ' ') continue
            state = 1
            res++
        } else {
            if(s[i] === ' ') break
            res++
        }
    }
    return res
};