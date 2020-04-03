/**
 * https://leetcode-cn.com/problems/permutations-ii/
 * 全排列II
 * Medium
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    let res = []
    let len = nums.length
    nums.sort((a,b) => a-b)
    function backtrack(i, tmp, isRead) {
        if(tmp.length === len) {
            res.push([...tmp])
            return
        }
        let map = {}
        for(let j=0;j<len;j++) {
            if(isRead[j] || map[nums[j]]) continue
            map[nums[j]] = 1
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