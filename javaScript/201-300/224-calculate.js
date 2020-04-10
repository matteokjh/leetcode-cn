/**
 * https://leetcode-cn.com/problems/basic-calculator/
 * 224. 基本计算器
 * Hard
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let res = 0
    let stack = []
    let sign = 1
    for(let i=0;i<s.length;i++) {
        let ch = s[i]
        if((/[0-9]/).test(ch)) {
            let cur = ch
            while(i+1 < s.length && (/[0-9]/).test(s[i+1])) {
                i++
                cur += s[i]
            }
            res += sign * +cur
        } else if(ch === '+') {
            sign = 1
        } else if(ch === '-') {
            sign = -1
        } else if(ch === "(") {
            stack.push(res)
            res = 0
            stack.push(sign)
            sign = 1
        } else if(ch === ")") {
            res = stack.pop() * res + stack.pop()
        }
    }
    return res
};

// 先把中缀表达式转后缀表达式，然后求值
const calculate2 = (s) => {
    // 中缀表达式转后缀
    function convert(s) {
        let res = []
        let stack = []
        const priority = {
            "+": 1,
            "-": 1,
            "*": 2,
            "/": 2,
        }
        for(let i=0;i<s.length;i++) {
            let ch = s[i]
            if(/[0-9]/.test(ch)) {
                let cur = ch
                while(i+1 < s.length && /[0-9]/.test(s[i+1])) {
                    cur += s[i+1]
                    i++
                }
                res.push(cur)
            } else if(ch === '(') {
                stack.push('(')
            } else if(ch === ')') {
                while(stack.length && stack[stack.length-1] !== '(') {
                    res.push(stack.pop())
                }
                stack.pop()
            } else {
                while(stack.length && priority[stack[stack.length-1]] >= priority[ch]) {
                    res.push(stack.pop())
                }
                stack.push(ch)
            }
        }
        while(stack.length) res.push(stack.pop())
        return res
    }
    let S = convert(s)
    let stack = []
    console.log(S)
    for(let i=0;i<S.length;i++) {
        let ch = S[i]
        if(ch === ' ') continue
        if(Number.isInteger(+ch)) {
            stack.push(+ch)
        } else { // 符号
            let b = stack.pop()
            let a = stack.pop()
            switch(ch) {
                case "+": stack.push(a + b);break
                case "-": stack.push(a - b);break
                case "*": stack.push(a * b);break
                case "/": stack.push(a / b);
            }
        }
    }
    return stack[0]
}

function test() {
    const data = "(1+(49 +5+2)*3)+(6+8)"
    console.log(calculate2(data))
}
test()