/**
 * https://leetcode-cn.com/problems/matrix-cells-in-distance-order/
 * 单元格坐标顺序排列
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    // bfs方法
    // function func(r0,c0){
    //     // BFS
    //     if(r0-1 >= 0 && !visited[r0-1][c0]){
    //         res.push([r0-1,c0]);
    //         visited[r0-1][c0] = 1;
    //         a.push([r0-1,c0]);
    //     }
    //     if(r0+1 < R && !visited[r0+1][c0]){
    //         res.push([r0+1,c0]);
    //         visited[r0+1][c0] = 1;
    //         a.push([r0+1,c0]);
    //     }
    //     if(c0-1 >= 0 && !visited[r0][c0-1]){
    //         res.push([r0,c0-1]);
    //         visited[r0][c0-1] = 1;
    //         a.push([r0,c0-1]);
    //     }
    //     if(c0+1 < C && !visited[r0][c0+1]){
    //         res.push([r0,c0+1]);
    //         visited[r0][c0+1] = 1;
    //         a.push([r0,c0+1]);
    //     }
    //     if(a.length == 0) return
    //     func(...a.shift())
        
    // }
    // let a = [];
    // let visited = [...new Array(R)].map(()=>Array(C).fill(0));
    // let res = [[r0,c0]]
    // visited[r0][c0] = 1;
    // func(r0,c0);
    // return res;

    // 暴力排序法 --- 更快
    let res = [];
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            res.push([i,j])
        }
    }
    res.sort((a,b)=>(Math.abs(a[0]-r0)+Math.abs(a[1]-c0))-(Math.abs(b[0]-r0)+Math.abs(b[1]-c0)))
    return res
};

let res = allCellsDistOrder(2,3,1,2);
console.log(res)