/**
 * https://leetcode-cn.com/problems/largest-perimeter-triangle/
 * 976. 三角形的最大周长
 * Easy
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a,b) => a-b)
    let len = A.length
    for(let i=len-1;i>1;i--) {
        let a = A[i]
        let b = A[i-1]
        let c = A[i-2]
        if(b + c > a) return a + b + c
    }
    return 0
};