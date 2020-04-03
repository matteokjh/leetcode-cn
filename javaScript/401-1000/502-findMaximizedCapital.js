/**
 * https://leetcode-cn.com/problems/ipo/
 * 502. IPO
 * Hard
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
var findMaximizedCapital = function (k, W, Profits, Capital) {
    let arr = Profits.map((e, i) => [e, Capital[i]])
    arr.sort((a,b) => b[0] - a[0])
    for(let i=0;i<k;i++) {
        for(let j=0;j<arr.length;j++) {
            if(W >= arr[j][1]) {
                W += arr[j][0]
                arr.splice(j, 1)
                break
            }
        }
    }
    return W
};