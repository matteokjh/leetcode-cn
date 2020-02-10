/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 螺旋矩阵
 * Medium
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0){
        return []
    }
    let m = matrix.length;
    let n = matrix[0].length;
    let arr = matrix;
    let res = [];
    let i=0,j=0;
    let state = 'right';
    for(let s=0;s<m*n;s++){
        if (state === 'down' && ( arr[i+1]==null || arr[i+1][j]==null || arr[i+1] && i===m-1 ) ) {
            state = 'left';
        } else if (state === 'right' &&   ( arr[i][j+1]==null || arr[i][j+1]&&j===n-1 ) ) {
            state = 'down';
        } else if (state === 'up' && ( arr[i-1]==null || arr[i-1][j]==null || arr[i-1]&&i===0 )) {
            state = 'right';
        } else if (state === 'left' && ( arr[i][j-1]==null || arr[i][j-1]&&j===0 )) {
            state = 'up'
        }
        switch (state) {
            case 'down': res[s] = arr[i][j]; arr[i][j] = null; i++; break;
            case 'right': res[s] = arr[i][j]; arr[i][j] = null; j++; break;
            case 'up': res[s] = arr[i][j]; arr[i][j] = null; i--; break;
            case 'left': res[s] = arr[i][j]; arr[i][j] = null; j--;
        }
    }
    return res
};