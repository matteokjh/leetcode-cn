/**
 * https://leetcode-cn.com/problems/is-unique-lcci/
 * 面试题 01.01. 判定字符是否唯一
 * Easy
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    // 1. 位运算
    let mark = 0
    for(let i=0;i<astr.length;i++) {
        let t = astr[i].charCodeAt()
        if((mark & (1 << t)) !== 0) {
            return false
        } else {
            mark |= (1 << t)
        }
    }
    return true

    // 2. Set length
    // return new Set(astr).size === astr.length

    // 3. Map

    // 4. reverse indexOf
};