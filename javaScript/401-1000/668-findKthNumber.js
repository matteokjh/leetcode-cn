/**
 * https://leetcode-cn.com/problems/kth-smallest-number-in-multiplication-table/
 * 668. 乘法表中第k小的数
 * Hard
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    if(k === 1) return 1
    if(k === m*n) return m*n
    function func(num) {
        let count = 0
        for(let i=1;i<=m;i++) {
            count += Math.min(~~(num / i), n)
        }
        return count
    }
    let left = 1
    let right = m*n
    while(left < right) {
        let mid = left + ~~((right-left)/2)
        let cnt = func(mid)
        if(cnt < k) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
};