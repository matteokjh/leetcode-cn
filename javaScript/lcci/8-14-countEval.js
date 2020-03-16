/**
 * https://leetcode-cn.com/problems/boolean-evaluation-lcci/
 * 面试题 08.14. 布尔运算
 * Medium
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
let map0 = {}
let map1 = {}
var countEval = function(s, result) {
    if(!s) return 0
    let len = s.length
    if(len === 1) return s == result ? 1 : 0
    let res = 0
    for(let i=0;i<len;i++) {
        if(s[i] === '0' || s[i] === '1') continue
        let left = s.substring(0, i)
        let right = s.substring(i+1)
        if(map0[left] === undefined) {
            map0[left] = countEval(left, 0)
        }
        if(map0[right] === undefined) {
            map0[right] = countEval(right, 0)
        }
        if(map1[left] === undefined) {
            map1[left] = countEval(left, 1)
        }
        if(map1[right] === undefined) {
            map1[right] = countEval(right, 1)
        }
        let left0 = map0[left]
        let left1 = map1[left]
        let right0 = map0[right]
        let right1 = map1[right]
        switch(s[i]) {
            case '&': res += result === 1 ? left1 * right1 : left0 * right0 + left1 * right0 + left0 * right1;break
            case '|': res += result === 0 ? left0 * right0 : left0 * right1 + left1 * right0 + left1 * right1;break
            case '^': res += result === 0 ? left0 * right0 + left1 * right1 : left0 * right1 + left1 * right0;break
        }
    }
    return res
};