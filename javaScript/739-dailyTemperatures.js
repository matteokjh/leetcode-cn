/**
 * https://leetcode-cn.com/problems/daily-temperatures/
 * 日温度
 * Medium
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    // 栈
    let stack = []
    let res = new Array(T.length).fill(0)
    for(let i=T.length-1;i>=0;i--) {
        while(stack.length && T[i] >= T[stack[0]]) {
            stack.shift()
        }
        if(stack.length) {
            res[i] = stack[0] - i
        }
        stack.unshift(i)
    }
    return res
};