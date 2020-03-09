/**
 * https://leetcode-cn.com/problems/convert-integer-lcci/
 * 面试题 05.06. 整数转换
 * Easy
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function(A, B) {
    let a = myToString2(A)
    let b = myToString2(B)
    function myToString2(num) {
        if(num < 0) {
            let str = myToString2(-num-1)
            return str.split('').map(e=>e === '0' ? '1' : '0').join('')
        } else return (('0').repeat(32) + num.toString(2)).slice(-32)
    }
    let res = 0
    for(let i=0;i<a.length;i++) {
        if(a[i] !== b[i]) res++
    }
    return res
};