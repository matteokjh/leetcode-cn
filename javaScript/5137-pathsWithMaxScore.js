/**
 * https://leetcode-cn.com/problems/number-of-paths-with-max-score/
 * 最大得分的路径数目
 * Hard
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    if(!board || !board.length) return [0,0]
    let row = board.length
    let col = board[0].length
    let dp = [...new Array(row)].map(()=>Array(col).fill(0))
    let times = [...new Array(row)].map(()=>Array(col).fill(0)) // 次数
    // 最后一行
    times[row-1][col-1] = 1
    for(let i=col-2;i>=0;i--) {
        if(board[row-1][i] === 'X') break
        dp[row-1][i] = dp[row-1][i+1] + +board[row-1][i]
        times[row-1][i] = 1
    }
    for(let i=row-2;i>=0;i--) {
        for(let j=col-1;j>=0;j--) {
            if(board[i][j] === 'X') continue
            let a = dp[i+1][j] === undefined ? -1 : dp[i+1][j]
            let b = dp[i][j+1] === undefined ? -1 : dp[i][j+1]
            let c = dp[i+1][j+1] === undefined ? -1 : dp[i+1][j+1]
            if(a===-1 && b===-1 && c===-1) continue
            if(!times[i+1][j] && !times[i][j+1] && !times[i+1][j+1]) continue
            let tmp = Math.max(a,b,c)
            dp[i][j] = (tmp + (board[i][j] === 'E' ? 0 : +board[i][j])) % (10**9 + 7)
            if(tmp === a) {
                times[i][j] = times[i+1][j] || 0
                if(tmp === b) {
                    times[i][j] += times[i][j+1]
                }
            }
            if(tmp === b) {
                times[i][j] = times[i][j+1] || 0
                if(tmp === a) {
                    times[i][j] += times[i+1][j]
                }
            }
            if(tmp === c) {
                times[i][j] = times[i+1][j+1] || 0
            }
            times[i][j] = times[i][j] % (10**9 + 7)
        }
    }
    return [dp[0][0],times[0][0]]
};