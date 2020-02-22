/**
 * https://leetcode-cn.com/problems/number-of-substrings-containing-all-three-characters/
 * 5325. 包含所有三种字符的子字符串数目
 * Medium
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let a = []
    let b = []
    let c = []
    let len = s.length
    let res = 0
    for(let i=0;i<s.length;i++) {
        switch(s[i]) {
            case 'a': a.push(i);break
            case 'b': b.push(i);break
            case 'c': c.push(i);break
        }
    }
    while(a.length && b.length && c.length) {
        let min = Math.min(a[0],b[0],c[0])
        let max = Math.max(a[0],b[0],c[0])
        res += len - max
        if(min === a[0]) {
            a.shift()
        }
        if(min === b[0]) {
            b.shift()
        }
        if(min === c[0]) {
            c.shift()
        }
    }
    return res
};