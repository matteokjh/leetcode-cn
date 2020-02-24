/**
 * https://leetcode-cn.com/problems/rotate-matrix-lcci/
 * 面试题 01.07. 旋转矩阵
 * Medium
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(!matrix || !matrix.length) return matrix
    let N = matrix.length
    for(let i=0;i<N;i++) {
        for(let j=i+1;j<N;j++) {
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    for(let i=0;i<N;i++) {
        for(let j=0;j<N/2;j++) {
            [matrix[i][j],matrix[i][N-j-1]] = [matrix[i][N-j-1],matrix[i][j]]
        }
    }
    return matrix
};