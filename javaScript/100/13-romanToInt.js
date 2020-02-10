/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    s = s.split('');
    let a = new Map([['I', 1],['V', 5],['X', 10],['L', 50],['C', 100],['D', 500],['M', 1000]]);
    return s.reduce((acc,cur,idx)=>{
        if(a.get(cur) < a.get(s[idx+1])){
            acc = acc - a.get(cur);
        }else{
            acc += a.get(cur);
        }
        return acc
    },0)
};