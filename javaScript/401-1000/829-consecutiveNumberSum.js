/**
 * https://leetcode-cn.com/problems/consecutive-numbers-sum/
 * 829. 连续整数求和
 * Hard
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function (N) {
    let res = 0
    for(let i=1;N > 0;N -= i++) {
        if(N % i === 0) res++
    }
    return res
};