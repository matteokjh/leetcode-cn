/**
 * https://leetcode-cn.com/problems/rotate-array/
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverse(nums,start,end){
    let temp;
    while(start < end){
        temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp
    }
}
var rotate = function(nums, k) {
    // 法一，leetcode不给用
    // return nums.slice(nums.length-k).concat(nums.slice(0,nums.length-k)) 

    // 法二，但是应该不是原地算法
    // k = k % nums.length 
    // while(k){
    //     nums.unshift(nums.pop());
    //     k--
    // }

    // 法三，反转三次
    let n = nums.length
    k %= n
    reverse(nums,0,n-1)
    reverse(nums,0,k-1)
    reverse(nums,k,n-1)
    return nums
};

let a = [1,2,3,4,5,6,7]
let res = rotate(a,3);
console.log(res)