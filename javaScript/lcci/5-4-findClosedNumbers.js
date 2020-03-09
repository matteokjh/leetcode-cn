/**
 * https://leetcode-cn.com/problems/closed-number-lcci/
 * 面试题 05.04. 下一个数
 * Medium
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function(num) {
    function countsOne(num) {
        if(num < 0) {
            return countsOne(-num)
        }
        return num.toString(2).split('').filter(e=> e === '1').length
    }
    let total = countsOne(num)
    let res = []
    let cur = num+1
    while(countsOne(cur) !== total) {
        cur++
    }
    res[0] = cur
    cur = num-1
    while(countsOne(cur) !== total) {
        cur--
    }
    res[1] = cur
    return res
};