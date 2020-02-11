/**
 * https://leetcode-cn.com/problems/evaluate-division/
 * 除法求值
 * Medium
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let m = {}
    let res = []
    function dfs(start,end,k,visited) {
        if(!m[start]) return -1
        if(m[start][end]) return k * m[start][end]
        visited.add(start)
        let res = -1
        for(let path in m[start]) {
            if(visited.has(path)) continue
            res = dfs(path,end,k * m[start][path],visited)
            if(res !== -1) break
        }
        visited.delete(start)
        return res
    }
    for(let i=0;i<values.length;i++) {
        if(!m[equations[i][0]]) m[equations[i][0]] = {}
        if(!m[equations[i][1]]) m[equations[i][1]] = {}
        m[equations[i][0]][equations[i][1]] = values[i]
        m[equations[i][1]][equations[i][0]] = 1 / values[i]
    }
    for(let i=0;i<queries.length;i++) {
        res.push(dfs(queries[i][0],queries[i][1],1,new Set()))
    }
    return res
    
};