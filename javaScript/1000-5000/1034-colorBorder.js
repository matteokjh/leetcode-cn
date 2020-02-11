/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, r0, c0, color) {
    let row = grid.length;
    let col = grid[0].length;
    let preColor = grid[r0][c0];
    let res = [];
    let dp = [...new Array(row)].map(()=>Array(col).fill(-1));
    console.log('init => ',dp)
    function func(r,c){
        dp[r][c] = 1;
        if(grid[r][c] == preColor){
            if(r==0 || r==row-1 || c==0 || c==col-1){
                res.push([r,c])
            }else if(grid[r-1][c] == preColor && grid[r+1][c] == preColor && grid[r][c-1] == preColor && grid[r][c+1] == preColor){
                
            }else{
                res.push([r,c])
            }

            
            if(r-1>=0 && dp[r-1][c] == -1){
                func(r-1,c)
            }
            if(r+1<row && dp[r+1][c] == -1){
                func(r+1,c)
            }
            if(c-1>=0 && dp[r][c-1] == -1){
                func(r,c-1)
            }
            if(c+1<col && dp[r][c+1] == -1){
                func(r,c+1)
            }
        }
    }

    func(r0,c0)
    console.log('dp => ',dp)
    console.log('要染色的块 => ',res)
    res.forEach(e=>{
        grid[e[0]][e[1]] = color;
    })
    return grid

};

let a = [
    [1,2,1,2,1,2],
    [2,2,2,2,1,2],
    [1,2,2,2,1,2],
]
let res = colorBorder(a,1,3,1);
console.log('res => ',res)

    