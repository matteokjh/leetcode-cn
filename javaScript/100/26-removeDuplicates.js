/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 删除排序数组中的重复项 --- 原地删除
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 我的解法
    // let len = nums.length;
    // for(let i=0;i<nums.length;){
    //     if(nums[i] == nums[i+1]){
    //         nums.splice(i,1);
    //         len--;
    //     }else{
    //         i++;
    //     }
    // }
    // console.log(nums)
    // return len;

    // 别人的解法
    let i = 0;
    for(let j=i+1;j<nums.length;j++){
        if(nums[j] != nums[j-1]){
            i++;
            nums[i]=nums[j]
        }
    }
    console.log(nums);
    return i+1
};

let a = [1,1,1,2,2,2,3,4,5,6,6,7];

let res = removeDuplicates(a);
console.log(res)