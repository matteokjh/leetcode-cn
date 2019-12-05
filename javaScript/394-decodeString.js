/**
 * https://leetcode-cn.com/problems/decode-string/
 * 字符串解码
 * Medium
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    let count = 0
    let res = ''
    s = s.split('')
    while(s.length) {
        let a = s.shift()
        if(a === '[') {
            stack.push([count,res])
            count = 0
            res = ''
        } else if(a === ']') {
            let [times,last_res] = stack.pop()
            let tmpWord = ''
            for(let i=0;i<times;i++) {
                tmpWord += res
            }
            res = last_res + tmpWord
        } else if(a >= '0' && a <= '9') { // 数字
            count = +(count + a)
        } else { // 字母
            res += a
        }
    }
    return res
};