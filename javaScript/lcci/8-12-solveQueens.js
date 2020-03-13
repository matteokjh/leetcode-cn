/**
 * https://leetcode-cn.com/problems/eight-queens-lcci/
 * 面试题 08.12. 八皇后
 * Hard
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = []
    let board = new Array(n).fill(('.').repeat(n))
    let visited = [...new Array(n)].map(() => Array(n).fill(0))
    function backtrack(i, board) {
        if(i >= n) {
            res.push([...board])
            return
        }
        for(let j=0;j<n;j++) {
            if(isValid(i, j, board)) {
                transfer(i, j, board, 'Q')
                backtrack(i+1, board)
                transfer(i, j, board, '.')
            }
        }
    }
    function isValid(i, j, board) {
        // 正上
        for(let k = i-1;k >= 0;k--) {
            if(board[k][j] === 'Q') return false
        }
        // 左上
        for(let k = i-1,t=j-1;k >= 0 && t >= 0;k--,t--) {
            if(board[k][t] === 'Q') return false
        }
        // 右上
        for(let k = i-1,t=j+1;k >= 0 && t < n;k--,t++) {
            if(board[k][t] === 'Q') return false
        }
        return true
    }
    function transfer(i, j, board, s) {
        let str = board[i]
        board[i] = str.substring(0, j) + s + str.substring(j+1)
    }
    backtrack(0, board)
    return res
};