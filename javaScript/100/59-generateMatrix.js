/**
 * https://leetcode-cn.com/problems/spiral-matrix-ii/
 * 螺旋矩阵 II
 * Medium
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n === 0){
        return []
    }
    let arr = [...Array(n)].map(() => Array(n).fill('null')) //新建 m x n 的矩阵二维数组
    let state = 'right';
    let i,j;
    i=0;j=0;
    let m = n;
    for(let s=1; s<=n*n;s++){
        if (state === 'down' && (i < m-1 && arr[i+1][j]!=='null' || i===m-1)) {
            state = 'left';
        } else if (state === 'right' && (j < n-1 && arr[i][j+1]!=='null' || j===n-1)) {
            state = 'down';
        } else if (state === 'up' && (i > 0 && arr[i-1][j]!=='null' || i===0)) {
            state = 'right';
        } else if (state === 'left' && (j > 0 && arr[i][j-1]!=='null' || j===0)) {
            state = 'up'
        }
        switch (state) {
            case 'down': arr[i][j] = s; i++; break;
            case 'right': arr[i][j] = s; j++; break;
            case 'up': arr[i][j] = s; i--; break;
            case 'left': arr[i][j] = s; j--;
        }
    }
    return arr
};