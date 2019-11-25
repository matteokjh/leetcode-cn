/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * medium
 * 岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    if(!grid[0]) {
        return 0
    }
    let row = grid.length
    let col = grid[0].length
    let m = [...new Array(row)].map(()=>Array(col).fill(false))
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            m[i][j] = false
        }
    }
    function func(grid,i,j,tmp=false){
        if(i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0' || m[i][j]) {
            return
        }
        if(tmp) {
            res++
        }
        m[i][j] = true
        func(grid,i-1,j)
        func(grid,i+1,j)
        func(grid,i,j-1)
        func(grid,i,j+1)
    }
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            func(grid,i,j,true)
        }
    }
    return res
};