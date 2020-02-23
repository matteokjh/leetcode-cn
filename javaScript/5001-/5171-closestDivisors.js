/**
 * https://leetcode-cn.com/problems/closest-divisors/
 * 5171. 最接近的因数
 * Medium
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    let a = num + 1
    let b = num + 2
    let res = [Infinity, -Infinity]
    for(let i=1;i<=Math.sqrt(a);i++) {
        if(a % i === 0) {
            res = Math.abs(res[0] - res[1]) >= Math.abs(a / i - i) ? [a / i,i] : res
        }
    }
    for(let i=Math.min(...res);i<=Math.sqrt(b);i++) {
        if(b % i === 0) {
            res = Math.abs(res[0] - res[1]) >= Math.abs(b / i - i) ? [b / i,i] : res
        }
    }
    return res
};