/**
 * https://leetcode-cn.com/problems/minimum-path-sum/submissions/
 * 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length
    let n = grid[0].length
    // ===============================
    //     1. 需要额外空间的dp

    // let dp = [...new Array(m+1)].map(()=>Array(n+1).fill(Infinity))
    // dp[0][1] = 0
    // for(let i=1;i<=m;i++) {
    //     for(let j=1;j<=n;j++) {
    //         dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]
    //     }
    // }
    // return dp[m][n]
    // ===============================
    //     2. 不需要额外空间的dp
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i >= 1 && j >= 1) {
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
            } else if (i >= 1) {
                grid[i][j] += grid[i - 1][j]
            } else if (j >= 1) {
                grid[i][j] += grid[i][j - 1]
            }
        }
    }
    return grid[m - 1][n - 1]
    // ===============================
};