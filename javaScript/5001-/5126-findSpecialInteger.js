/**
 * https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/
 * 有序数组中出现次数超过25%的元素
 * Easy
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if(!arr || !arr.length) return 0
    let len = arr.length
    let count = 1
    let res = arr[0]
    for(let i=1;i<len;i++) {
        if(count > len / 4) return arr[i]
        if(arr[i] !== arr[i-1]) {
            count = 1
            res = arr[i]
        } else {
            count++
        }
    }
    return res
};