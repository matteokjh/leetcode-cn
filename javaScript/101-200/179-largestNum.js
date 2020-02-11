/**
 * https://leetcode-cn.com/problems/largest-number/
 * 最大数
 * Medium
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(nums.every(e=>e===0)) {
        return '0'
    }
    nums.sort((a,b) => {
        let s1 = a + '' + b
        let s2 = b + '' + a
        if(s1 > s2) {
            return -1
        } else return 1
    })
    return nums.join('')
};