/**
 * https://leetcode-cn.com/problems/surrounded-regions/
 * 被围绕的区域
 * Medium
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board && board.length) {
        let row = board.length
        let col = board[0].length
        let dp = [...new Array(row)].map(()=>Array(col).fill(0))
        function dfs(i,j) {
            if(i < 0 || j < 0 || i >= row || j >= col || board[i][j] === 'X' || dp[i][j] !== 0) return
            if(board[i][j] === 'O') {
                dp[i][j] = 1
            } else dp[i][j] = -1
            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)
        }
        for(let j=0;j<col;j++) {
            dfs(0,j)
            dfs(row-1,j)
        }
        for(let i=0;i<row;i++) {
            dfs(i,0)
            dfs(i,col-1)
        }
        for(let i=1;i<row-1;i++) {
            for(let j=1;j<col-1;j++) {
                if(dp[i][j] === 0 && board[i][j] === 'O') board[i][j] = 'X'
            }
        }
    }
};