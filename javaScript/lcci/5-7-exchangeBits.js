/**
 * https://leetcode-cn.com/problems/exchange-lcci/
 * 面试题 05.07. 配对交换
 * Easy
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
    let arr = ('00'+num.toString(2)).split('').reverse()
    for(let i=1;i<arr.length;i+=2) {
        [arr[i-1],arr[i]] = [arr[i],arr[i-1]]
    }
    return parseInt(arr.reverse().join(''), 2)
};