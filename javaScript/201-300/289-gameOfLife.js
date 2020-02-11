/**
 * https://leetcode-cn.com/problems/game-of-life/
 * 生命游戏
 * Medium
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let row = board.length
    let col = board[0].length
    let res = [...new Array(row)].map(() => Array(col).fill(0))
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            if(j > 0) {
                if(board[i][j-1]%2 === 1)
                    board[i][j] += 2
                if(i > 0 && board[i-1][j-1]%2 === 1)
                    board[i][j] += 2
                if(i < row - 1 && board[i+1][j-1]%2 === 1)
                    board[i][j] += 2
            }
            if(j < col - 1) {
                if(board[i][j+1]%2 === 1)
                    board[i][j] += 2
                if(i > 0 && board[i-1][j+1]%2 === 1)
                    board[i][j] += 2
                if(i < row - 1 && board[i+1][j+1]%2 === 1)
                    board[i][j] += 2
            }
            if(i > 0 && board[i-1][j]%2 === 1)
                board[i][j] += 2
            if(i < row - 1 && board[i+1][j]%2 === 1)
                board[i][j] += 2
        }
    }
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            if(board[i][j] >= 5 && board[i][j] <= 7) {
                board[i][j] = 1
            } else {
                board[i][j] = 0
            }
        }
    }
    return board
};