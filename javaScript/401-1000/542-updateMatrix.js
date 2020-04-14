/**
 * https://leetcode-cn.com/problems/01-matrix/
 * 542. 01 矩阵
 * Medium
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    // 正向，把 1 变大，之后取自身，上，右的较小值 + 1
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if(!matrix[i][j]) continue
            if (matrix[i][j] == 1) matrix[i][j] = 999
            if (i > 0) matrix[i][j] = Math.min(matrix[i][j], matrix[i - 1][j] + 1)
            if (j > 0) matrix[i][j] = Math.min(matrix[i][j], matrix[i][j - 1] + 1)
        }
    }
    // 反向同理
    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            if(!matrix[i][j]) continue
            if (i < row - 1) matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1)
            if (j < col - 1) matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1)
        }
    }
    return matrix;
};