/**
 * https://leetcode-cn.com/problems/permutations/
 * 全排列
 * Medium
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    let len = nums.length
    function backtrack(i, tmp, isRead) {
        if(tmp.length === len) {
            res.push([...tmp])
            return
        }
        for(let j=0;j<len;j++) {
            if(isRead[j]) continue
            isRead[j] = 1
            tmp.push(nums[j])
            backtrack(j+1, tmp, isRead)
            tmp.pop()
            isRead[j] = 0
        }
    }
    backtrack(0, [], {})
    return res
};