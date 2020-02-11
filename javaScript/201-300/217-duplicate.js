/**
 * https://leetcode-cn.com/problems/contains-duplicate
 * 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let obj = {};
    // for(let i=0;i<nums.length;i++){
    //     if(!obj[nums[i]]){
    //         obj[nums[i]] = 1;
    //     }else{
    //         return true
    //     }
    // }
    // return false
    
    // 一行
    // return [...new Set(nums)].length < nums.length ? true : false
    return new Set(nums).size !== nums.length
};