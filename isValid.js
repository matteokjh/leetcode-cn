/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 检查括号是否有效 () [] {}
 */
var isValid = function (s) {
    s = s.split('');
    let res = [];
    let m = new Map([['(',')'],['[',']'],['{','}']]);
    while(s.length > 0){ 
        res.push(s.shift());
        console.log(res)
        if(res[res.length-1] === m.get(res[res.length-2])){
            res.pop();
            res.pop();
        }else if(res[res.length-1] == ')' || res[res.length-1] == ']' || res[res.length-1] == '}'){
            return false
        }
    }
    console.log(res)
    if(res.length == 0) return true;
    else return false
};

var isValid2 = function(s){ //试下正则 --- 结论：正则骚一点，但是开销大
    while(s && (s.indexOf('()')>=0 || s.indexOf('[]')>=0 || s.indexOf('{}')>=0 )){
        s = s.replace(/\[\]/g, '');
        s = s.replace(/\(\)/g, '');
        s = s.replace(/\{\}/g, '');
    }
    if(!s){
        return true
    }else{
        console.log(s)
        return false
    }
}

let a = '[(])';

let res = isValid(a);

console.log(res)