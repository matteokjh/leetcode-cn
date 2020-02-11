/**
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * 搜素二维矩阵 II
 * Medium
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length) {
        return false
    }
    let row = matrix.length
    let col = matrix[0].length
    let i = row - 1
    let j = 0
    while(i >= 0 && i < row && j >= 0 && j < col) {
        let data = matrix[i][j]
        if(data === target) {
            return true
        }
        if(data < target) {
            j++
        }
        if(data > target) {
            i--
        }
    }
    return false
};