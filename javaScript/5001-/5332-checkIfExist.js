/**
 * https://leetcode-cn.com/problems/check-if-n-and-its-double-exist/submissions/
 * 检查整数及其两倍数是否存在
 * Easy
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let m = {}
    for(let num of arr) {
        if(m[num]) {
            return true
        }
        m[num * 2] = 1
        if(num % 2 === 0) {
            m[num / 2] = 1
        }
    }
    return false
};