/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 不同路径 II
 * Medium
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(!obstacleGrid || !obstacleGrid.length) return 0
    let res = 0
    let row = obstacleGrid.length
    let col = obstacleGrid[0].length
    let dp = [...new Array(row)].map(() => Array(col).fill(0))
    // 对第一行和第一列的预处理
    for(let j=0;j<col;j++) {
        if(obstacleGrid[0][j]) {
            break
        }
        dp[0][j] = 1
    }
    for(let i=0;i<row;i++) {
        if(obstacleGrid[i][0]) {
            break
        }
        dp[i][0] = 1
    }
    for(let i=1;i<row;i++) {
        for(let j=1;j<col;j++) {
            if(obstacleGrid[i][j] === 1) {
                continue
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[row-1][col-1]
};