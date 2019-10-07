/**
 * https://leetcode-cn.com/problems/maximal-rectangle/
 * 最大矩形
 * Hard
 * @param {character[][]} matrix
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [-1]
    let max = 0
    for(let i=0;i<heights.length;i++) {
        while(heights[i] < heights[stack[stack.length-1]]) {
            max = Math.max(max, heights[stack.pop()] * (i - 1 - stack[stack.length-1]))
        }
        stack.push(i)
    }
    while(stack[stack.length-1] !== -1) {
        max = Math.max(max, heights[stack.pop()] * (heights.length - 1 - stack[stack.length-1]))
    }
    return max
};
var maximalRectangle = function(matrix) {
    if(!matrix.length || !matrix[0].length) {
        return 0
    }
    let res = 0
    let dp = new Array(matrix[0].length).fill(0)
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++) {
            if(matrix[i][j] === '1') {
                dp[j]++
            } else {
                dp[j] = 0
            }
        }
        res = Math.max(res,largestRectangleArea(dp))
    }
    return res
};