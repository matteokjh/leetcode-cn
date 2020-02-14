/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 面试题40. 最小的k个数
 * Easy
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    return arr.sort((a,b)=>a-b).slice(0,k)
};