/**
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * 面试题62. 圆圈中最后剩下的数字
 * Easy
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    // 约瑟夫环
    let res = 0
    for(let i=1;i<=n;i++) {
        res = (res + m) % i
    }
    return res
};