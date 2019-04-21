
/**
 * https://leetcode-cn.com/problems/reverse-integer/submissions/
 * 字符串转换整数
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let a = str;
    let tt = 0;
    let dd = 0;
    if(a.trim()[0] === '+'){
        a = a.trim().split('');
        a.shift();
        if(a.length === 0) return 0;
        a = a.join('')
        dd = 1;
        console.log(a)
    }
    if(a === '' || a.trim() === '' || dd === 1 && isNaN(a.trim()[0]) === true ||   dd === 1 && a[0] === ' '|| a.trim()[0]!=='-' && isNaN(a.trim()[0]) === true){
        return 0;
    }else{
        a = a.trim().split('');
        console.log(a)
        if(a[0] === '-'){
            a.shift();
            tt = 1;
        }
        let b = '';
        let i = 0;
        while(1){
            if(a[i] && a[i]!== ' ' && isNaN(a[i]) === false){
                b+=a[i];
                i++
            }else{
                break;
            }
        }
        if(tt){
            b = -b;
        }
        if(b > Math.pow(2,31)-1){
            b = Math.pow(2,31)-1
        }else if(b < -Math.pow(2,31)){
            b = -Math.pow(2,31) 
        }
        return b
    }
};