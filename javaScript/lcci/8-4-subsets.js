/**
 * https://leetcode-cn.com/problems/power-set-lcci/
 * 面试题 08.04. 幂集
 * Medium
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let len = nums.length
    let res = []
    function func(maxLen, idx, tmp, isRead) {
        if(tmp.length === maxLen) {
            res.push(tmp)
            return
        }
        for(let k=idx;k<len;k++) {
            if(isRead[k]) continue
            isRead[k] = 1
            func(maxLen, k, tmp.concat(nums[k]), isRead)
            isRead[k] = 0
        }
    }
    for(let i=0;i<=len;i++) {
        func(i, 0, [], {})
    }
    return res
};