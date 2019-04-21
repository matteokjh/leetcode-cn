/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('');
    let res = [];
    let m = new Map([['(',')'],['[',']'],['{','}']]);
    while(s.length > 0){ 
        res.push(s.shift());
        // console.log(res)
        if(res[res.length-1] === m.get(res[res.length-2])){
            res.pop();
            res.pop();
        }else if(res[res.length-1] == ')' || res[res.length-1] == ']' || res[res.length-1] == '}'){
            return false
        }
    }
    // console.log(res)
    if(res.length == 0) return true;
    else return false
};