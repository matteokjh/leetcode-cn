/**
 * https://leetcode-cn.com/problems/search-rotate-array-lcci/
 * 面试题 10.03. 搜索旋转数组
 * Medium
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let left = 0
    let right = arr.length - 1
    if(target >= arr[left]) {
        while(arr[left] < target) {
            left++
        }
        if(arr[left] === target) {
            return left
        } else return -1
    } else {
        while(arr[right] > target) {
            right--
        }
        if(arr[right] === target) {
            while(arr[--right] === target) {}
            return right + 1
        } else return -1
    }
};