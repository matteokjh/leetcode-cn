/**
 * https://leetcode-cn.com/problems/rotate-image/submissions/
 * 旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 先转置，再逐行反转
var rotate = function(matrix) {
    let n = matrix.length
    let t
    for(let i=0;i<n;i++) {
        for(let j=i;j<n;j++) {
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    for(let i=0;i<n;i++) {
        for(let j=0;j<~~(n/2);j++) {
            [matrix[i][j],matrix[i][n-j-1]] = [matrix[i][n-j-1],matrix[i][j]]
        }
    }
    
};