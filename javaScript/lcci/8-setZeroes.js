/**
 * https://leetcode-cn.com/problems/zero-matrix-lcci/
 * 面试题 01.08. 零矩阵
 * Medium
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    let zeroRow = []
    let zeroCol = []
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            if(matrix[i][j] === 0) {
                zeroRow.push(i)
                zeroCol.push(j)
            }
        }
    }
    for(let i of zeroRow) {
        for(let j=0;j<col;j++) {
            matrix[i][j] = 0
        }
    }
    for(let i of zeroCol) {
        for(let j=0;j<row;j++) {
            matrix[j][i] = 0
        }
    }
};