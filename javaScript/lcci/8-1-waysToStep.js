/**
 * https://leetcode-cn.com/problems/three-steps-problem-lcci/
 * 面试题 08.01. 三步问题
 * Easy
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    let MOD = 1000000007
    let res = 0
    let arr = [1,2,4]
    if(n < 4) {
        return arr[n-1]
    }
    for(let i=4;i<=n;i++) {
        res = (arr[0] + arr[1] + arr[2])%MOD
        arr[0] = arr[1]
        arr[1] = arr[2]
        arr[2] = res
    }
    // console.log(dp)
    return res
};