/**
 * https://leetcode-cn.com/problems/excel-sheet-column-number/
 * Excel表列序号
 * Easy
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    return s.split('').reverse().reduce((acc,cur, idx) => {
        let a = cur.charCodeAt() - 64
        acc += a * 26 ** idx
        return acc
    }, 0)
};