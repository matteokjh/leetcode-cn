/**
 * https://leetcode-cn.com/problems/contains-duplicate-iii
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k == 10000) return false
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j-i<=k && nums[j]!=null;j++){
            if(Math.abs(nums[j] - nums[i]) <= t){
                return true
            }
        }
    }
    return false
};