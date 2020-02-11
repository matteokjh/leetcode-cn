/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
 * 买卖股票II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buying  = false;
    let res = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i+1] > prices[i] && !buying){
            buying = true;
            a = prices[i]
        }
        if(prices[i+1] < prices[i] && buying){
            buying = false;
            res += prices[i]-a
            continue
        }
        if(i == prices.length-1 && buying){
            res += prices[i]-a
        }
    }
    return res
};