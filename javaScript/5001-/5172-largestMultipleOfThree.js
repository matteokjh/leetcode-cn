/**
 * https://leetcode-cn.com/problems/largest-multiple-of-three/
 * 5172. 形成三的最大倍数
 * Hard
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    let urDaddy = [[],[],[]]
    let res = ''
    let t = 0
    digits.sort((a,b) => b-a)
    for(let i=0;i<digits.length;i++) {
        urDaddy[digits[i]%3].push(i)
        t += digits[i]
        res += digits[i]
    }
    let arr = []
    if(t%3 === 1) {
        if(urDaddy[1].length) {
            arr = urDaddy[1]
            let pos = arr[arr.length-1]
            res = res.substring(0, pos) + res.substring(pos+1)
        } else {
            arr = urDaddy[2]
            let pos1 = arr[arr.length-1]
            let pos2 = arr[arr.length-2]
            res = res.substring(0, pos2) + res.substring(pos2+1, pos1) + res.substring(pos1+1)
        }
    } else if(t%3 === 2) {
        if(urDaddy[2].length) {
            arr = urDaddy[2]
            let pos = arr[arr.length-1]
            res = res.substring(0, pos) + res.substring(pos+1)
        } else {
            arr = urDaddy[1]
            let pos1 = arr[arr.length-1]
            let pos2 = arr[arr.length-2]
            res = res.substring(0, pos2) + res.substring(pos2+1, pos1) + res.substring(pos1+1)
        }
    }
    return res[0] === '0' ? '0' : res
};