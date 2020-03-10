/**
 * https://leetcode-cn.com/problems/draw-line-lcci/
 * 面试题 05.08. 绘制直线
 * Medium
 * @param {number} length
 * @param {number} w
 * @param {number} x1
 * @param {number} x2
 * @param {number} y
 * @return {number[]}
 */
var drawLine = function(length, w, x1, x2, y) {
    let res = new Array(length).fill(0)
    let arr = new Array(32*length).fill('0')
    let h = length / w * 32
    for(let i=x1 + y*w;i<=x2 + y*w;i++) {
        arr[i] = '1'
    }
    for(let i=0;i<length;i++) {
        res[i] = myParseInt2(arr.slice(i*32,i*32+32).join(''))
    }
    function myParseInt2(str) {
        // 如果是负数
        if(str[0] === '1') {
            return -(parseInt(str.split('').map(e => e === '1' ? '0' : '1').join(''), 2) + 1)
        } else {
            return parseInt(str, 2)
        }
    }
    return res
};