/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 搜索旋转升序数组（logn）
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function s(arr, low, high, t) {
    while (low <= high) {
        let mid = ~~((low + high) / 2);
        if (arr[mid] == t) return mid
        else if (arr[mid] < arr[high]) {
            if (arr[mid] < t && t <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (arr[mid] > t && t >= arr[low]) {
                high = mid - 1;
            } else low = mid + 1
        }
    }
    return -1
}
var search = function (nums, target) {
    return s(nums, 0, nums.length - 1, target)
};
let a = [4, 5, 6, 7, 0, 1, 2];
// let a = [0,1,2,3,4,5,6,7];

function test(arr) {
    arr.forEach(e => {
        console.log('test => ', e, 'res => ', search(a, e))
    })
}
let b = [0, 1, 2, 3, 4, 5, 6, 7, 9, -2]
test(b)
// 5 6 7 0 1 2
