/**
 * https://leetcode-cn.com/problems/maximal-square/
 * 最大正方形
 * medium
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix || !matrix.length) {
        return 0
    }
    let row = matrix.length
    let col = matrix[0].length
    let dp = new Array(col + 1).fill(0)
    let prev = 0
    let res = 0
    for(let i=1;i<=row;i++) {
        for(let j=1;j<=col;j++) {
            let temp = dp[j]
            if(matrix[i-1][j-1] === '1') {
                dp[j] = Math.min(Math.min(dp[j-1],prev),dp[j]) + 1
                res = Math.max(res,dp[j])
            } else {
                dp[j] = 0
            }
            prev = temp
        }
    }
    return res**2
};