/**
 * https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * 5340. 统计有序矩阵中的负数
 * Easy
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let res = 0
    for(let i=row-1;i>=0;i--) {
        for(let j=0;j<col;j++) {
            if(grid[i][j] < 0) {
                res += col - j
                break
            }
        }
    }
    return res
};