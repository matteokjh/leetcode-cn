/**
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 * 面试题10- II. 青蛙跳台阶问题
 * Easy
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(!n) return 1
    let pre = 1
    let cur = 1
    for(let i=2;i<=n;i++) {
        let c = (pre + cur) % (1e9 + 7)
        pre = cur
        cur = c
    }
    return cur
};