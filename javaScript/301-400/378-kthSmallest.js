/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * 378. 有序矩阵中第K小的元素
 * Medium
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // return matrix.reduce((acc,cur) => acc.concat(cur),[]).sort((a,b) => a-b)[k-1]
    let N = matrix.length
    let left = matrix[0][0]
    let right = matrix[N-1][N-1]
    while(left <= right) {
        let mid = left + ~~((right-left)/2)
        let i = N-1, j = 0, cnt = 0
        while(i >= 0 && j < N) {
            if(matrix[i][j] <= mid) {
                cnt += i+1
                j++
            } else {
                i--
            }
        }
        if(cnt < k) left = mid+1
        else right = mid-1
    }
    return left
};