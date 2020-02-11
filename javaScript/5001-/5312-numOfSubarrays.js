/**
 * https://leetcode-cn.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * 大小为 K 且平均值大于等于阈值的子数组数目
 * Medium
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let len = arr.length
    let task = k * threshold
    if(len === k) return 1
    let res = 0
    for(let i=0;i<=len - k;i++) {
        let sum = 0
        for(let j=i;j<i+k;j++) {
            sum += arr[j]
            if(sum >= task) {
                res++
                break
            }
        }
    }
    return res
};