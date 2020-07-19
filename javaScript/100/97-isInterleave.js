/**
 * https://leetcode-cn.com/problems/interleaving-string/
 * 97. 交错字符串
 * Hard
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false
    const len1 = s1.length
    const len2 = s2.length
    const dp = [...new Array(len1 + 1)].map(() => Array(len2 + 1).fill(0))
    dp[0][0] = 1
    for (let i = 1; i <= len1 && s1[i - 1] === s3[i - 1]; i++) dp[i][0] = 1
    for (let i = 1; i <= len2 && s2[i - 1] === s3[i - 1]; i++) dp[0][i] = 1
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++)
            dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1] || dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]
    }
    return dp[len1][len2]
};