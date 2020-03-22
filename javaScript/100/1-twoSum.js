/**
 * https://leetcode-cn.com/problems/two-sum/submissions/
 * 两数和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = {}
    for(let i=0;i<nums.length;i++) {
        let num = nums[i]
        if(m[target - num] !== undefined) {
            return [i, m[target - num]]
        }
        m[num] = i
    }
    return []
};