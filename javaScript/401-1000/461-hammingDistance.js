/**
 * https://leetcode-cn.com/problems/hamming-distance/
 * 汉明距离
 * Easy
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a = x.toString(2).split('').reverse()
    let b = y.toString(2).split('').reverse()
    let res = 0
    if(a.length < b.length) {
        [a,b] = [b,a]
    }
    let i=0
    while(b[i]) {
        if(a[i] !== b[i]) res++
        i++
    }
    while(a[i]) {
        if(a[i] === '1') res++
        i++
    }
    return res
    // 一行
    // return (x^y).toString(2).split('').reduce((acc,cur)=>{if(cur==='1')acc++;return acc},0)
};