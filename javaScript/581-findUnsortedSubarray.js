/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let max = -Infinity
    let min = Infinity
    let end
    let start
    for(let i=0;i<nums.length;i++) {
        if(max > nums[i]) {
            end = i
        }
        max = Math.max(max,nums[i])
    }
    for(let i=nums.length-1;i>=0;i--) {
        if(min < nums[i]) {
            start = i
        }
        min = Math.min(min,nums[i])
    }
    return end === start ? 0 : end - start + 1
};