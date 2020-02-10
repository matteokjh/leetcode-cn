/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 投机取巧版本
    // nums1.splice(m,n,...nums2.slice(0,n))
    // nums1.sort((a,b)=>a-b)
    // return nums1
    // ------------------------------
    // 归并版本
    let i = nums1.length-1
    while(m && n){
        nums1[i] = nums1[m-1] > nums2[n-1] ? nums1[-1+m--] : nums2[-1+n--]
        i--
    }
    while(n){
        nums1[i--] = nums2[-1+n--]
    }
    return nums1
};

let a1 = [1,2,3,0,0,0]
let a2 = [2,5,6]
let res = merge(a1,3,a2,3)
console.log(res)