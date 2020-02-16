// https://leetcode-cn.com/problems/product-of-the-last-k-numbers/
// 5341. 最后 K 个数的乘积
// Medium
var ProductOfNumbers = function() {
    this.val = [1]
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num) {
        this.val.push(this.val[this.val.length-1] * num)
    } else{
        this.val = [1]
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(k >= this.val.length) return 0
    let len = this.val.length
    return this.val[len - 1] / this.val[len - k - 1]
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */