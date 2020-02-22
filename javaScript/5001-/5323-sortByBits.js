/**
 * https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/
 * 5323. 根据数字二进制下 1 的数目排序
 * Easy
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    function func(str) {
        return str.split('').reduce((acc,cur) => cur === '1' ? acc+1 : acc,0)
    }
    return arr.sort((a,b) => {
        let A = func(a.toString(2))
        let B = func(b.toString(2))
        return A === B ? a - b : A - B
    })
};