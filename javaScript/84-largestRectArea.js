/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/submissions/
 * 柱状图中最大矩形
 * Hard
 * @param {number[]} heights
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