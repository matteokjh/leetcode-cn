/**
 * https://leetcode-cn.com/problems/reverse-integer/submissions/
 * 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a  = x.toString().split('')
    let tt = 0;
    if(a[0] === '-') {
        a.shift();
        tt = 1;
    }
    a.reverse();
    if(tt) {
        a.unshift('-')
    }
    a = a.join('')
    a = parseInt(a)
    if(a > Math.pow(2,31)-1 || a < -Math.pow(2,31)){
        return 0;
    }else{
        return a
    }
};