
var StockSpanner = function() {
    this.price = []
    this.cache = []
};

/** 
 * https://leetcode-cn.com/problems/online-stock-span/
 * 901. 股票价格跨度
 * Medium
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let res = 1
    while(this.price.length && this.price[this.price.length-1] <= price) {
        this.price.pop()
        res += this.cache.pop()
    }
    this.price.push(price)
    this.cache.push(res)
    return res
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */