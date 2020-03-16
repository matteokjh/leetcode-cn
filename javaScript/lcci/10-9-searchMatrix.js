/**
 * https://leetcode-cn.com/problems/sorted-matrix-search-lcci/
 * 面试题 10.09. 排序矩阵查找
 * Medium
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length) return false
    let row = matrix.length
    let col = matrix[0].length
    let i = row-1
    let j = 0
    while(i >= 0 && j < col) {
        if(matrix[i][j] === target) return true
        else if(matrix[i][j] < target) {
            j++
        } else {
            i--
        }
    }
    return false
};