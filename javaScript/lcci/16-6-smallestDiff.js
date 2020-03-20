/**
 * https://leetcode-cn.com/problems/smallest-difference-lcci/
 * 面试题 16.06. 最小差
 * Medium
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function(a, b) {
    a.sort((x,y) => x-y)
    b.sort((x,y) => x-y)
    let i = j = 0
    let res = Infinity
    while(i < a.length && j < b.length) {
        res = Math.min(res, Math.abs(a[i] - b[j]))
        if(a[i] <= b[j]) {
            i++
        } else j++
    }
    return res
};