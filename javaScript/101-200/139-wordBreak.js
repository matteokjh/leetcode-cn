/**
 * https://leetcode-cn.com/problems/word-break/
 * 单词拆分
 * Medium
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    let m = new Set(wordDict)
    let maxLen = 0
    let minLen = 0
    wordDict.forEach(e=>{
        m.add(e)
        maxLen = Math.max(maxLen,e.length)
        minLen = Math.min(minLen,e.length)
    })
    dp[0] = true
    for(let i=minLen;i<=s.length;i++) {
        for(let j=Math.max(i-maxLen,0);j<=i-minLen;j++) {
            if(dp[j] && m.has(s.substring(j,i))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
};