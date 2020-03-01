/**
 * https://leetcode-cn.com/problems/inter-node-access-lcci/
 * 面试题 04.01. 节点间通路
 * Medium
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath = function (n, graph, start, target) {
    let s = new Set()
    s.add(start)
    let count = 0
    while (1) {
        for (let arr of graph) {
            if (s.has(arr[0])) s.add(arr[1])
        }
        if (s.size === count) break
        else count = s.size
    }
    return s.has(target)
    // let m = {}
    // for(let arr of graph) {
    //     if(!m[arr[1]]) m[arr[1]] = new Set()
    //     m[arr[1]].add(arr[0])
    // }
    // if(!m[target]) return false
    // let queue = [target]
    // while(queue.length) {
    //     let end = queue.shift()
    //     if(!m[end]) continue
    //     let arr = [...m[end]]
    //     m[end] = null
    //     for(let i=0;i<arr.length;i++) {
    //         if(arr[i] === start) return true
    //         queue.push(arr[i])
    //     }
    // }
    // return false
};