/**
 * https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game/
 * 找出井字棋的获胜者
 * Easy
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let state = 1
    let dp = [...new Array(3)].map(()=>Array(3).fill(0))
    for (let e of moves) {
        state = !state
        dp[e[0]][e[1]] = state ? 2 : 1
        if(func(e[0],e[1])) {
            return state ? 'B' : 'A'
        }
    }
    if(moves.length === 9) {
        return 'Draw'
    } else {
        return 'Pending'
    }
    
    function func(a,b) {
        let flag = 1
        // 行
        for(let i=0;i<3;i++) {
            if(dp[a][i] !== dp[a][b]) {
                flag = 0
            }
        }
        if(flag) return flag
        // 列
        flag = 1
        for(let i=0;i<3;i++) {
            if(dp[i][b] !== dp[a][b]) {
                flag = 0
            }
        }
        if(flag) return flag
        // 对角线
        if(dp[0][0] === dp[a][b] && dp[1][1] === dp[a][b] && dp[2][2] === dp[a][b]
           || dp[2][0] === dp[a][b] && dp[1][1] === dp[a][b] && dp[0][2] === dp[a][b]) {
            
            return 1
        } else {
            return 0
        }
    }
};