/**
 * https://leetcode-cn.com/problems/edit-distance/submissions/
 * 编辑距离
 * Hard
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length
    let n = word2.length
    let dp = [...new Array(m + 1)].map(() => Array(n + 1).fill(0))
    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (i * j) {
                dp[i][j] = word1[i - 1] === word2[j - 1]
                    ? dp[i - 1][j - 1]
                    : Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            } else {
                dp[i][j] = i + j
            }
        }
    }
    return dp[m][n]
};