/**
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 第k个排列
 * Medium
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = ''
    let arr = new Array(n).fill(0).map((e,idx) => idx+1)
    k--
    for(let i=1;i<=n;i++) { // 一次循环出一位数
        num = ~~(k / factorial(n-i))
        k -= num * factorial(n-i)
        res += arr[num]
        arr.splice(num,1)
    }
    function factorial(num) {
        if(num === 0) return 0
        if(num === 1) return 1
        return num * factorial(num-1)
    }
    return res
};