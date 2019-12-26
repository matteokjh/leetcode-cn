/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * 杨辉三角
 * Easy
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [...new Array(numRows)].map((e,idx)=>Array(idx+1))
    for(let i=0;i<numRows;i++) {
        res[i][0] = 1
        for(let j=1;j<i;j++) {
            res[i][j] = res[i-1][j-1] + res[i-1][j]
        }
        res[i][i] = 1
    }
    return res
};