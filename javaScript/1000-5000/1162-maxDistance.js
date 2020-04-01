/**
 * https://leetcode-cn.com/problems/as-far-from-land-as-possible/
 * 1162. 地图分析
 * Medium
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let N = grid.length
    let dp = [...new Array(N)].map(() => Array(N).fill(Infinity))
    let res = -1
    for(let i=0;i<N;i++) {
        for(let j=0;j<N;j++) {
            if(grid[i][j]) dp[i][j] = 0
        }
    }
    for(let i=0;i<N;i++) {
        for(let j=0;j<N;j++) {
            if(i > 0) dp[i][j] = Math.min(dp[i][j], dp[i-1][j] + 1)
            if(j > 0) dp[i][j] = Math.min(dp[i][j], dp[i][j-1] + 1)
        }
    }
    for(let i=N-1;i>=0;i--) {
        for(let j=N-1;j>=0;j--) {
            if(i < N - 1) dp[i][j] = Math.min(dp[i][j], dp[i+1][j] + 1)
            if(j < N - 1) dp[i][j] = Math.min(dp[i][j], dp[i][j+1] + 1)
        }
    }
    for(let i=0;i<N;i++) {
        for(let j=0;j<N;j++) {
            res = Math.max(res, dp[i][j])
        }
    }
    return res === Infinity || res <= 0 ? -1 : res
};