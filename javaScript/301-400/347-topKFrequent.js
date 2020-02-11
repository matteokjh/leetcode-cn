/**
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * 前 K 个高频元素
 * Medium
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let m = {}
    let list = []
    let res = []
    for(let i=0;i<nums.length;i++) {
        let a = nums[i]
        if(!m[a]) m[a] = 0
        m[a]++
    }
    let arr = [...new Set(nums)]
    for(let a of arr) {
        if(!list[m[a]]) {
            list[m[a]] = []
        }
        list[m[a]].push(a)
    }
    list = list.reduce((acc,cur)=>{
        if(Array.isArray(cur)) {
            acc.push(...cur)
        } else {
            acc.push(cur)
        }
        return acc
    },[])
    while(res.length < k) {
        res.push(list.pop())
    }
    return res
};