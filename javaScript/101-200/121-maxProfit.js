/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 买卖股票I
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    let res = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i]
            max = 0;
            continue
        }
        max = prices[i] > max ? prices[i] : max;
        res = max - min > res ? max-min : res;
    }
    return res
};