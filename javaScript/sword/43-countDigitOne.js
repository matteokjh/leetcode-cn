/**
 * https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/
 * 面试题43. 1～n整数中1出现的次数
 * Medium
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let res = 0
    let i=1
    while(i <= n) {
        let high = ~~(n / i / 10)
        let cur = ~~(n / i)  % 10
        let low = n - ~~(n / i) * i
        switch(cur) {
            case 0: res += high * i;break
            case 1: res += high * i + low + 1;break
            default: res += (high + 1) * i
        }
        i *= 10
    }
    return res
};