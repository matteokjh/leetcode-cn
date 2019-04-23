/**
 * https://leetcode-cn.com/problems/remove-element/
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 我的解法 --- 不过这题不支持filter
    // return nums.filter(e=>e!=val);

    // 不用filter
    let flag = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[flag] = nums[i];
            flag++;
        }
    }
    return flag
};

let a = [3,2,2,3,5];

let res = removeElement(a,3);
console.log(res);