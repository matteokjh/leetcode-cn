/**
 * https://leetcode-cn.com/problems/add-binary/
 * 67. 二进制求和
 * Easy
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let alen = a.length
    let blen = b.length
    let cin = 0
    let res = ""
    let apos = alen-1
    let bpos = blen-1
    while(apos >= 0 || bpos >= 0) {
        let numa = apos < 0 ? 0 : +a[apos]
        let numb = bpos < 0 ? 0 : +b[bpos]
        let tmp = numa + numb + cin
        cin = 0
        if(tmp > 1) {
            cin = 1
        }
        tmp = tmp % 2 ? 1 : 0
        res = tmp + res
        if(apos >= 0) apos--
        if(bpos >= 0) bpos--
    }
    if(cin) res = '1' + res
    return res
};