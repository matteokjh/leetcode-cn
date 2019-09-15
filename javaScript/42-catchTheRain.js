/**
 * https://leetcode-cn.com/problems/trapping-rain-water/
 * 接雨水
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length
    let left = new Array(len).fill(0)
    let right = new Array(len).fill(0)
    for(let i=1;i<len;i++) {
        left[i] = Math.max(height[i-1],left[i-1])
    }
    for(let i=len - 2;i>=0;i--) {
        right[i] = Math.max(height[i+1],right[i+1])
    }
    let res = 0
    for(let i=0;i<len;i++) {
        let a = Math.min(left[i],right[i])
        res += Math.max(0,a - height[i])
    }
    return res
};