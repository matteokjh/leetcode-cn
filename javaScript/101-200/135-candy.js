/**
 * https://leetcode-cn.com/problems/candy/
 * 135. 分发糖果
 * Hard
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    // 初始为1，前后遍历
    // =========================================================
    // let len = ratings.length
    // let arr = new Array(len).fill(1)
    // for(let i=1;i<len;i++) {
    //     if(ratings[i] > ratings[i-1]) {
    //         arr[i] = arr[i-1] + 1
    //     }
    // }
    // for(let i=len - 1;i>=0;i--) {
    //     if(ratings[i] > ratings[i+1]) {
    //         arr[i] = Math.max(arr[i], arr[i+1]+1)
    //     }
    // }
    // return arr.reduce((acc,cur) => acc+cur)
    // =========================================================
    // 一次遍历
    // =========================================================
    let cur = 1
    let res = 1
    let dec = 0
    let pre = 0
    for(let i=1;i<ratings.length;i++) {
        if(ratings[i] > ratings[i-1]) {
            cur++
            res += cur
            dec = 0
        } else if(ratings[i] === ratings[i-1]) {
            cur = 1
            res += cur
            dec = 0
        } else {
            if(!dec) pre = cur
            dec++
            cur = 1
            if(pre > dec) {
                res += dec + cur - 1
            } else {
                res += dec + cur // 多的那一个是给峰值补发的
            }
        }
    }
    return res
};