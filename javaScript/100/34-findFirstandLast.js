/**
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
 * 搜索旋转升序数组（logn）
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRange = function(nums, target) {
    if(nums.length <= 0) {
        return [-1,-1]
    }
    let len = nums.length;
    let i = Math.floor(len / 2);
    let temp;
    let a=-1,b=-1;
    let min=0,max=len;
    let last;
    while(1) {
        if(target < nums[i]) {
            max = i;
            i = Math.floor((max - min) / 2);
            if(i == last) {
                break;
            }
            last = i;
            continue;
        }
        if(target > nums[i]) {
            min = i;
            i += Math.floor((max - min) / 2);
            if(i == last) {
                break;
            }
            last = i;
            continue;
        }
        if(target == nums[i]) {
            temp = i;
            break;
        }
    }
    while(temp != null) {
        i--;
        if(nums[i] != target) {
            a = i+1;
            break;
        }
    }
    i = temp;
    while(temp != null) {
        i++;
        if(nums[i] != target) {
            b = i-1;
            break;
        }
    }
    return [a,b]
};