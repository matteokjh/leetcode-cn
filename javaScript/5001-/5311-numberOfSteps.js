/**
 * https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * 将数字变成 0 的操作次数
 * Easy
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0
    while(num > 0) {
        num = num % 2 ? num-1 : num / 2
        count++
    }
    return count
};