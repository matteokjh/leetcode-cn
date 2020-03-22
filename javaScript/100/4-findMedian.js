/**
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/submissions/
 * 寻找两个有序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findKth(nums1, i, nums2, j, k) {
    // 空数组
    if(i >= nums1.length) return nums2[j + k - 1]
    if(j >= nums2.length) return nums1[i + k - 1]
    if(k === 1) {
        return Math.min(nums1[i], nums2[j])
    }
    let mid1 = Number.MAX_SAFE_INTEGER
    let mid2 = Number.MAX_SAFE_INTEGER
    let p = ~~(k/2)
    if(i + p - 1 < nums1.length) mid1 = nums1[i + p - 1]
    if(j + p - 1 < nums2.length) mid2 = nums2[j + p - 1]
    if(mid1 < mid2) {
        return findKth(nums1, i + p, nums2, j, k - p)
    } else {
        return findKth(nums1, i, nums2, j + p, k - p)
    }
}
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    let left = ~~((m + n + 1) / 2)
    let right = ~~((m + n + 2) / 2)
    return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right))/2
};