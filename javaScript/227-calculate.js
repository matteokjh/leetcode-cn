/**
 * https://leetcode-cn.com/problems/basic-calculator-ii/
 * 基本计算器 II
 * Medium
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let res = 0
    let d = 0
    let sign = '+'
    let stack = []
    for(let i=0;i<s.length;i++) {
        if(s[i].charCodeAt() >= ('0').charCodeAt()) {
            d = d * 10 + +s[i]
        }
        if(s[i].charCodeAt() < ('0').charCodeAt() && s[i] !== ' ' || i === s.length - 1) {
            switch(sign) {
                case '+': stack.push(d);break;
                case '-': stack.push(-d);break;
                default: {
                    let tmp = sign === '*' ? stack[stack.length-1] * d : ~~(stack[stack.length-1] / d)
                    stack.pop()
                    stack.push(tmp)
                }
            }
            sign = s[i]
            d = 0
        }
    }
    while(stack.length) {
        res += stack.pop()
    }
    return res
};