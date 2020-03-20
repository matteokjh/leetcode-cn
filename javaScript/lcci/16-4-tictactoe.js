/**
 * https://leetcode-cn.com/problems/tic-tac-toe-lcci/
 * 面试题 16.04. 井字游戏
 * Medium
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function(board) {
    let N = board.length
    let rowO = new Array(N).fill(0)
    let rowX = new Array(N).fill(0)
    let colO = new Array(N).fill(0)
    let colX = new Array(N).fill(0)
    let leftX = leftO = rightX = rightO = 0
    let res = 'Draw'
    for(let i=0;i<N;i++) {
        for(let j=0;j<N;j++) {
            if(board[i][j] === 'O') {
                rowO[i]++
                colO[j]++
                if(i === j) leftO++
                if(i + j === N - 1) rightO++
            }
            if(board[i][j] === 'X') {
                rowX[i]++
                colX[j]++
                if(i === j) leftX++
                if(i + j === N - 1) rightX++
            }
            if(board[i][j] === ' ') {
                res = 'Pending'
            }
        }
    }
    if(leftX === N || rightX === N) return 'X'
    if(leftO === N || rightO === N) return 'O'
    for(let i=0;i<N;i++) {
        if(rowX[i] === N || colX[i] === N) {
            return 'X'
        }
        if(rowO[i] === N || colO[i] === N) {
            return 'O'
        }
    }
    return res
};