/**
 * https://leetcode-cn.com/problems/count-primes/
 * 计数质数
 * Easy
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let res = 0
    let map = {}
    for(let i=2;i<n;i++) {
        if(!map[i]) {
            ++res
            for(let j=2;i*j<n;++j) {
                map[i*j] = true
            }
        }
    }
    return res
};