/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
 * 面试题56 - II. 数组中数字出现的次数 II
 * Medium
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a = 0
    let b = 0
    for(let num of nums) {
        a = (a ^ num) & ~b
        b = (b ^ num) & ~a
    }
    return a
};