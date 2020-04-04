/**
 * https://leetcode-cn.com/problems/color-fill-lcci/
 * 面试题 08.10. 颜色填充
 * Easy
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // bfs
    let originColor = image[sr][sc]
    if(originColor === newColor) return image
    let row = image.length
    let col = image[0].length
    let queue = [[sr,sc]]
    let visited = {}
    let dxy = [[-1,0], [0, 1], [1, 0], [0, -1]]
    while(queue.length) {
        let [x, y] = queue.shift()
        image[x][y] = newColor
        for(let i=0;i<4;i++) {
            let [dx, dy] = dxy[i]
            let [tx, ty] = [x + dx, y + dy]
            if(tx < 0 || tx >= row || ty < 0 || ty >= col || visited[[tx,ty]] || image[tx][ty] !== originColor) {
                continue
            }
            visited[[tx,ty]] = 1
            queue.push([tx, ty])
        }
    }
    return image
};

var floodFill = function(image, sr, sc, newColor) {
    // dfs
    let originColor = image[sr][sc]
    if(originColor === newColor) return image
    let row = image.length
    let col = image[0].length
    
    function dfs(i, j) {
        if(i < 0 || j < 0 || i >= row || j >= col || image[i][j] !== originColor) return
        image[i][j] = newColor
        dfs(i-1, j)
        dfs(i+1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    }
    dfs(sr, sc)
    return image
};