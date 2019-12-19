/**
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * 和为K的子数组
 * Medium
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0
    let sum = 0
    let map = new Map([[0,1]])
    for(let num of nums) {
        sum += num
        if(!map.get(sum-k)) map.set(sum-k,0)
        res += map.get(sum-k)
        if(!map.get(sum)) map.set(sum,0)
        map.set(sum,map.get(sum)+1)
    }
    return res
};