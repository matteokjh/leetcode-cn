/**
 * https://leetcode-cn.com/problems/two-sum/submissions/
 * 两数和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i=0;i<nums.length;i++) {
        let num = nums[i]
        if(map[num] !== undefined) {
            return [map[num], i]
        }
        map[target - num] = i
    }
    return []
};