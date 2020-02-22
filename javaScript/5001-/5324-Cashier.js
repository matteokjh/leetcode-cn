/**
 * https://leetcode-cn.com/problems/apply-discount-every-n-orders/
 * 5324. 每隔 n 个顾客打折
 * Medium
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.n = n
    this.discount = discount
    this.now = 0
    let m = {}
    for(let i=0;i<products.length;i++) {
        m[products[i]] = prices[i]
    }
    this.map = m
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    let res = 0
    for(let i=0;i<product.length;i++) {
        res += this.map[product[i]] * amount[i]
    }
    this.now++
    if(this.now === this.n) {
        res *= 1 - this.discount / 100
        this.now = 0
    }
    return res
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */