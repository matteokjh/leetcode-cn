/**
 * https://leetcode-cn.com/problems/set-matrix-zeroes/
 * 矩阵置零
 * Medium
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(!matrix || !matrix.length) {
        
    } else {
        let recRow = {}
        let recCol = {}
        let row = matrix.length
        let col = matrix[0].length
        for(let i=0;i<row;i++) {
            for(let j=0;j<col;j++) {
                if(matrix[i][j] === 0) {
                    recRow[i] = 1
                    recCol[j] = 1
                }
            }
        }
        for(let i=0;i<row;i++) {
            for(let j=0;j<col;j++) {
                if(matrix[i][j] === 0) continue
                if(recRow[i] || recCol[j]) matrix[i][j] = 0
            }
        }
    }
};