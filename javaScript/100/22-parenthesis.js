/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) { // 括号的所有排列情况
    let res = [];
    let c1=0,c2=0;
    let str = '';
    function func(res,str,c1,c2,n){
        if(c1 > n || c2 > n){
            return;
        }
        if(c1 == n && c2 == n){
            res.push(str);
            return;
        }
        if(c1 >= c2){
            func(res,str+'(',c1+1,c2,n);
            func(res,str+')',c1,c2+1,n);
        }
    
    }

    func(res,str,c1,c2,n);

    return res
};

let a = 3;

let res = generateParenthesis(a);

console.log(res)