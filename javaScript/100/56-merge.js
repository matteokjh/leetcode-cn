/**
 * https://leetcode-cn.com/problems/merge-intervals/submissions/
 * 合并区间
 * Medium
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return []
    let map = {}
    for(let arr of intervals) {
        if(map[arr[0]]) {
            if(map[arr[0]][1] < arr[1]) {
                map[arr[0]] = [arr[0], arr[1]]
            }
        } else{
            map[arr[0]] = arr
        }
    }
    let arr = Object.values(map)
    let res = [arr[0]]
    for(let i=1;i<arr.length;i++) {
        let item = res[res.length-1]
        if(arr[i][0] > item[1]) {
            res.push(arr[i])
        } else {
            if(arr[i][1] > item[1]) {
                res[res.length-1] = [item[0], arr[i][1]]
            }
        }
    }
    return res
};