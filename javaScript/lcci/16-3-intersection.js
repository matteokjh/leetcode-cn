/**
 * https://leetcode-cn.com/problems/intersection-lcci/
 * 面试题 16.03. 交点
 * Hard
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function(start1, end1, start2, end2) {
    // ax + by + c = 0
    // 求 a, b, c
    function getLine(start, end) {
        let [x1, y1] = start
        let [x2, y2] = end
        return [y2 - y1, x1 - x2, x2 * y1 - x1 * y2]
    }
    // 判断两直线的交点在不在四个点的区间内
    function inLine(x, y) {
        for(let [a, b] of [[start1, end1], [start2, end2]]) {
            let minX = Math.min(a[0], b[0])
            let maxX = Math.max(a[0], b[0])
            let minY = Math.min(a[1], b[1])
            let maxY = Math.max(a[1], b[1])
            if(!(x >= minX && x <= maxX && y >= minY && y <= maxY)) return false
        }
        return true
    }
    let [a1, b1, c1] = getLine(start1, end1)
    let [a2, b2, c2] = getLine(start2, end2)
    // 平行
    if(a1 * b2 === a2 * b1) {
        if(c1 !== c2) {
            return []
        }
        // 共线
        let res = []
        for(let p of [start1, end1, start2, end2]) {
            if(inLine(p[0], p[1])) {
                // 满足条件取最小
                if(!res.length || p[0] < res[0] || p[0] === res[0] && p[1] < res[1]) {
                    res = p
                }
            }
        }
        return res
    }
    // 不平行，计算交点
    let x = (c2 * b1 - c1 * b2) / (a1 * b2 - a2 * b1)
    let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1)
    if(inLine(x, y)) {
        return [x, y]
    } else return []
};