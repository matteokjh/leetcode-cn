/**
 * https://leetcode-cn.com/problems/deep-dark-fraction/
 * LCP 02. 分式化简
 * Easy
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
    let n = cont[cont.length - 1], m = 1;
    for (let i = cont.length - 2; i >= 0; i--) {
        [n, m] = [m, n];
        n = cont[i] * m + n;
    }
    return [n, m];
};