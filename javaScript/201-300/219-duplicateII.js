/**
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * 存在重复元素II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]] == null){
            obj[nums[i]] = i;
        }else{
            let pre = obj[nums[i]];
            if(i-pre <= k){
                return true
            }else{
                obj[nums[i]] = i
            }
        }
    }
    return false
};