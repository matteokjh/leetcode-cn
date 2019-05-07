/**
 * https://leetcode-cn.com/problems/product-of-array-except-self/
 * 除自身以外数组的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = 1;
    let right = 1;
    let res = [];
    for(let i=0;i<nums.length;i++){
        res[i] = left;
        left *= nums[i]
    }
    for(let j=nums.length-1;j>=0;j--){
        res[j] *= right;
        right *= nums[j]
    }
    return res
};