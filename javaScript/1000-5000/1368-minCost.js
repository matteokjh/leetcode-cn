/**
 * https://leetcode-cn.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 * 1368. 使网格图至少有一条有效路径的最小代价
 * Hard
 * @param {number[][]} grid
 * @return {number}
 */
// 01 BFS
var minCost = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let dx = [0, 0, 1, -1]
    let dy = [1, -1, 0, 0]
    let dp = [...new Array(row)].map(() => Array(col).fill(row*col))
    let visited = [...new Array(row)].map(() => Array(col).fill(0))
    let queue = [[0,0]]
    dp[0][0] = 0
    while(queue.length) {
        let cur = queue.shift()
        let [x, y] = cur
        if(visited[x][y]) continue
        visited[x][y] = 1
        for(let i=0;i<4;i++) {
            let tx = x + dx[i]
            let ty = y + dy[i]
            if(tx < 0 || tx >= row || ty < 0 || ty >= col) continue
            let cost = dp[x][y] + (grid[x][y] - 1 === i ? 0 : 1)
            if(cost < dp[tx][ty]) {
                dp[tx][ty] = cost
                if(cost === dp[x][y]) {
                    queue.unshift([tx,ty])
                } else {
                    queue.push([tx,ty])
                }
            }
        }
    }
    return dp[row-1][col-1]

};