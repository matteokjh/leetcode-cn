/**
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
 * 1013. 将数组分成和相等的三个部分
 * Easy
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    let sum = A.reduce((acc, cur) => acc + cur)
    if (sum % 3) return false
    let t = sum / 3
    let left = 0
    let right = A.length - 1
    let leftSum = A[left]
    let rightSum = A[right]
    let res = false
    while (left < right) {
        if (leftSum !== t) {
            leftSum += A[++left]
        }
        if (rightSum !== t) {
            rightSum += A[--right]
        }
        if (leftSum === t && rightSum === t) {
            res = true
            break
        }
    }
    return res && right - left > 1
};