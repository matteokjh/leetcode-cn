/**
 * https://leetcode-cn.com/problems/robot-in-a-grid-lcci/
 * 面试题 08.02. 迷路的机器人
 * Medium
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
    let res = []
    let row = obstacleGrid.length
    let col = obstacleGrid[0].length
    if(obstacleGrid[0][0] === 1) {
        return []
    }
    let visited = [...new Array(row)].map(()=>Array(col).fill(0))
    function dfs(i,j, path, visited) {
        if(i === row-1 && j === col-1) {
            if(obstacleGrid[i][j] === 0) {
                res = path
            }
            return
        }
        if(obstacleGrid[i][j] === 1 || visited[i][j]) {
            return
        }
        visited[i][j] = 1
        if(i+1 < row) {
            dfs(i+1, j, path.concat([[i+1,j]]), visited)
        }
        if(j+1 < col) {
            dfs(i, j+1, path.concat([[i,j+1]]), visited)
        }
    }
    dfs(0,0, [[0,0]], visited)
    return res
};