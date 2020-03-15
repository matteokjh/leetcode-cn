/**
 * https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/
 * 5356. 矩阵中的幸运数
 * Easy
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    let res = []
    let queue = []
    for(let i=0;i<row;i++) {
        let min = 1000000
        let t = []
        for(let j=0;j<col;j++) {
            if(matrix[i][j] < min) {
                t = [i, j]
                min = matrix[i][j]
            }
        }
        queue.push(t)
    }
    while(queue.length) {
        let [x, y] = queue.shift()
        let s = true
        for(let i=0;i<row;i++) {
            if(matrix[i][y] > matrix[x][y]) {
                s = false
                break
            }
        }
        if(s) {
            res.push(matrix[x][y])
        }
    }
    
    return res
};