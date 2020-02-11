/**
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 * 逆波兰表达式求值
 * Medium
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let operatorMap = {
        '+': 1,
        '-': 1,
        '*': 1,
        '/': 1
    }
    function operate(a,b,e) {
        switch(e) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return ~~(a / b);
        }
    }
    tokens.forEach(e => {
        if(operatorMap[e]) {
            let b = stack.pop()
            let a = stack.pop()
            stack.push(operate(a,b,e))
        } else {
            stack.push(+e)
        }
    })
    return stack[0]
};