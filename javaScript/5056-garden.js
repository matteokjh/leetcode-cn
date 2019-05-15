/**
 * 
 * 5056-不邻接植花
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    let res = new Array(N).fill(0);
    let rec = [];
    let m = [...Array(N)].map(()=>Array());
    for(let i=0;i<paths.length;i++){
        m[paths[i][0]-1].push(paths[i][1]-1);
        m[paths[i][1]-1].push(paths[i][0]-1);
    }
    // console.log(m)
    for(let i=0;i<N;i++){
        rec = [];
        m[i].forEach(e=>{
            rec[res[e]] = true;
        })
        for(let j=0;j<=4 && res[i] == 0;j++){
            if(!rec[j]){
                res[i] = j;
            }
        }
    }
    return res
};