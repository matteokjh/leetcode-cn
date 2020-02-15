/**
 * https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
 * 面试题45. 把数组排成最小的数
 * Medium
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((a,b) => {
        let s1 = a + '' + b
        let s2 = b + '' + a
        if(s1 < s2) {
            return -1
        } else return 1
    })
    return nums.join('')
};