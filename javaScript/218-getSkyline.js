/**
 * https://leetcode-cn.com/problems/the-skyline-problem/
 * 天际线问题
 * Hard
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    let arr = []
    let res = []
    let stack = [0]
    if(!buildings || !buildings.length) return []
    // 所有点
    buildings.forEach(e=>{
        arr.push([e[0],-e[2]],[e[1],e[2]])
    })
    // x坐标排序
    arr.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    let prev = 0
    let cur = 0
    for(let i=0;i<arr.length;i++) {
        let point = arr[i]
        if(point[1] < 0) {
            stack.push(-point[1])
        } else {
            stack.splice(stack.findIndex(e=>e === point[1]),1)
        }
        cur = Math.max(...stack)
        if(cur !== prev) {
            res.push([point[0],cur])
            prev = cur
        }
    }
    return res
};