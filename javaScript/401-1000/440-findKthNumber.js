/**
 * https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/
 * 440. 字典序的第K小数字
 * Hard
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let cur = 1
    k--
    while(k > 0) {
        let step = 0
        let first = cur
        let last = cur + 1
        while(first <= n) {
            step += Math.min(n + 1, last) - first
            first *= 10
            last *= 10
        }
        if(step <= k) {
            cur++
            k -= step
        } else {
            cur *= 10
            k--
        }
    }
    return cur
};