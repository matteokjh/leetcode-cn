/**
 * https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/
 * 面试题65. 不用加减乘除做加法
 * Easy
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    if(a === 0) return b
    return add((a&b) << 1, a^b)
};
// (a & b) << 1 是 进位和
// a ^ b 是不进位和
// 两者相加得结果，由于本题禁止 + 号，所以递归