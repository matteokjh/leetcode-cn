/**
 * https://leetcode-cn.com/problems/trapping-rain-water/
 * 接雨水
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_left = 0;
    let max_right = 0;
    let res = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > max_left) {
                max_left = height[left];
            } else {
                res += max_left - height[left];
            }
            left++;
        } else {
            if (height[right] > max_right) {
                max_right = height[right];
            } else {
                res += max_right - height[right];
            }
            right--;
        }
    }
    return res;
};
