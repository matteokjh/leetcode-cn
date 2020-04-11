/**
 * https://leetcode-cn.com/problems/largest-triangle-area/
 * 812. 最大三角形面积
 * Easy
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let res = 0
    for(let i=0;i<points.length-2;i++) {
        for(let j=i+1;j<points.length-1;j++) {
            for(let k=j+1;k<points.length;k++) {
                let x1 = points[i][0]
                let y1 = points[i][1]
                let x2 = points[j][0]
                let y2 = points[j][1]
                let x3 = points[k][0]
                let y3 = points[k][1]
                res = Math.max(res, Math.abs((x1-x3)*(y2-y3)-(x2-x3)*(y1-y3)))
            }
        }
    }
    return res / 2
};