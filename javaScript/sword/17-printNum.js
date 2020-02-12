/**
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 * 面试题17. 打印从1到最大的n位数
 * Easy
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let res = []
    for(let i=1;i<10**n;i++) {
        res.push(i)
    }
    return res
};