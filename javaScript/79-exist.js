/**
 * https://leetcode-cn.com/problems/word-search/submissions/
 * 单词搜索
 * Medium
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length
    let n = board[0].length
    let map = [...new Array(m)].map(()=>Array(n).fill(0))
    function backTrack(i,j,k) {
        if(k >= word.length) {
            return true
        }
        if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k] || map[i][j]) {
            return false
        }
        map[i][j] = 1
        let res = backTrack(i-1,j,k+1) || backTrack(i+1,j,k+1) || backTrack(i,j-1,k+1) || backTrack(i,j+1,k+1);
        map[i][j] = 0
        return res
    }
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(backTrack(i,j,0)) {
                return true
            }
        }
    }
    return false
};