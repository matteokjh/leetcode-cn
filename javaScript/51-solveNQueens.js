/**
 * https://leetcode-cn.com/problems/n-queens/
 * N皇后
 * Hard
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = []
    let board = new Array(n).fill(('.').repeat(n))
    function backtrack(board, row) {
        if(row >= n) {
            res.push([...board])
            return
        }
        for(let col=0;col<n;col++) {
            if(!isValid(board,row,col)) {
                continue
            }
            replaceStr(board,row,col,'Q')
            backtrack(board, row + 1)
            replaceStr(board,row,col,'.')
        }
    }
    // 判断点是否可放置皇后
    function isValid(board,row,col) {
        let n = board.length
        // 同行是不可能的，这里只需要判断左上和右上和同列
        // 同列
        for(let i=0;i<row;i++) {
            if(board[i][col] === 'Q') return false
        }
        // 左上
        for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--) {
            if(board[i][j] === 'Q') return false
        }
        // 右上
        for(let i=row-1,j=col+1;i>=0 && j < n;i--,j++) {
            if(board[i][j] === 'Q') return false
        }
        return true
    }
    // 修改字符串指定位置的字符
    function replaceStr(board, row, col, c) {
        board[row] = board[row].substring(0,col).concat(c,board[row].substring(col+1))
        return board
    }
    backtrack(board, 0)
    return res
};