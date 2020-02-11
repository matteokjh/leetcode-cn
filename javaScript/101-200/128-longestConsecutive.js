/**
 * https://leetcode-cn.com/problems/longest-consecutive-sequence/
 * 最长连续序列
 * Hard
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = {}
    let res = 0
    nums.forEach(e=>{
        numSet[e] = 1
    })
    for(let i=0;i<nums.length;i++) {
        let a = nums[i]
        if(numSet[a-1]) {
            continue
        }
        let len = 0
        while(numSet[a++]) {
            len++
        }
        res = Math.max(res,len)
    }
    return res
};