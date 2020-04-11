/**
 * https://leetcode-cn.com/problems/minimum-score-triangulation-of-polygon/
 * 1039. 多边形三角剖分的最低得分
 * Medium
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function (A) {
    let len = A.length
    let dp = [...new Array(len)].map(() => Array(len).fill(Infinity))
    for (let i = 0; i < len; i++) {
        dp[i][i + 1] = 0
    }
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + A[i]*A[j]*A[k])
            }
        }
    }
    return dp[0][len-1]
};