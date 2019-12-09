/**
 * https://leetcode-cn.com/problems/find-the-smallest-divisor-given-a-threshold/
 * 使结果不超过阈值的最小除数
 * Medium
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1
    let right = Math.max(...nums)
    let res
    while(left <= right) {
        let mid = ~~((left+right)/2)
        let temp = nums.reduce((acc,cur)=>acc+Math.ceil(cur/mid),0)
        if(temp > threshold) {
            left = mid + 1
        } else {
            res = mid
            right = mid - 1
        }
    }
    return res
};