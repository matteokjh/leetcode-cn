/**
 * https://leetcode-cn.com/problems/merge-intervals/submissions/
 * 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0] > b[0]) {
            return 1
        } else {
            return -1
        }
    })
    let tmp = []
    let res = intervals.reduce((acc,cur,idx)=>{
        if(tmp.length) {
            if(cur[0] <= tmp[1]) {
                tmp = [tmp[0], Math.max(cur[1],tmp[1])]
           } else {
               acc.push(tmp)
               tmp = [...cur]
           }
        } else {
            tmp = [...cur]
        }
        return acc
    },[])
    if(tmp.length) {
        res.push(tmp)
    }
    return res
};