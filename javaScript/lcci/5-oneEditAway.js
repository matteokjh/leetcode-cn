/**
 * https://leetcode-cn.com/problems/one-away-lcci/
 * 面试题 01.05. 一次编辑
 * Medium
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    let len = first.length - second.length
    if(len > 1 || len < -1) return false
    let count = 1
    for(let i=0,j=0;i < first.length && j < second.length;i++,j++) {
        if(first[i] !== second[j]) {
            if(len === 1) {
                j--
            } else if(len === -1) {
                i--
            }
            count--
        }
        if(count < 0) return false
    }
    return true
};