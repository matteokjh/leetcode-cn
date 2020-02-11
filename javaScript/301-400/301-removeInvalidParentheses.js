/**
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/
 * 删除无效的括号
 * Hard
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    function func(s,par,m,n,res) {
        let stack = 0
        for(let i = m;i < s.length;i++) {
            if(s[i] === par[0]) stack++
            if(s[i] === par[1]) stack--
            if(stack >= 0) continue
            for(let j=n;j<=i;j++) {
                if(s[j] === par[1] && (j === n || s[j-1] !== par[1])) {
                    let ss = s.substr(0,j) + s.substr(j+1)
                    func(ss,par,i,j,res)
                }
            }
            return
        }
        s = s.split('').reverse().join('')
                    console.log(s)
        if(par[0] === '(') {
            func(s,[par[1],par[0]],0,0,res)
        } else {
            res.push(s)
        }
    }
    let res = []
    func(s,['(',')'],0,0,res)
    return res
};