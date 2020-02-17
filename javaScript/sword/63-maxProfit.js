/**
 * https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
 * 面试题63. 股票的最大利润
 * Medium
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    let start = -1
    for(let i=0;i<prices.length;i++) {
        if(start !== -1) {
            if(prices[i] < start) {
                start = prices[i]
                continue
            } else if(prices[i] > start) {
                res = Math.max(res, prices[i] - start)
            }
        } else if(prices[i] < prices[i+1]) {
            start = prices[i]
        }
    }
    return res
    // let res = 0
    // let min = Infinity
    // for(let i=0;i<prices.length;i++) {
    //     min = Math.min(min,prices[i])
    //     res = Math.max(res, prices[i] - min)
    // }
    // return res
};