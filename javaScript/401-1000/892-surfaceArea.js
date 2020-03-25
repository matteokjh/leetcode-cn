/**
 * https://leetcode-cn.com/problems/surface-area-of-3d-shapes/
 * 892. 三维形体的表面积
 * Easy
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let N = grid.length
    let res = 0
    for(let i=0;i<N;i++) {
        for(let j=0;j<N;j++) {
            res += grid[i][j] * 6
            if(grid[i][j] > 0) {
                res -= (grid[i][j] - 1) * 2
            }
            if(j+1 < N) {
                res -= Math.min(grid[i][j+1], grid[i][j]) * 2
            }
            if(i+1 < N) {
                res -= Math.min(grid[i+1][j], grid[i][j]) * 2
            }
        }
    }
    return res
};