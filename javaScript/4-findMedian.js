/**
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/submissions/
 * 寻找两个有序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a = []
    a.push(...nums1,...nums2);
    a.sort((a,b)=>{
        return a-b
    });
    console.log(a)
    if(a.length%2 === 0){
        return (a[a.length/2] + a[a.length/2 - 1])/2
    }else{
        return a[(a.length - 1) / 2]
    }
    console.log(a)
};