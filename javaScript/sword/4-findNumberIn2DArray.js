/**
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * 面试题04. 二维数组中的查找
 * Easy
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let row = matrix.length
    let col = matrix[0].length
    function dfs(i,j) {
        if(i < 0 || j >= col) {
            return false
        }
        if(matrix[i][j] === target) return true
        else if(matrix[i][j] > target) {
            return dfs(i-1,j)
        } else {
            return dfs(i,j+1)
        }
    }
    return dfs(row-1,0)
};