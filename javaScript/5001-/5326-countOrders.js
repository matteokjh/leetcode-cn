/**
 * https://leetcode-cn.com/problems/count-all-valid-pickup-and-delivery-options/
 * 5326. 有效的快递序列数目
 * Hard
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    let MOD = BigInt(1e9 + 7)
    function pow2(x) {
        let res = BigInt(1)
        for(let i=1;i<=n;i++) {
            res = (res * BigInt(2))
        }
        return res
    }
    // 阶乘
    function func(x) {
        let res = BigInt(1)
        for(let i=1;i<=x;i++){
            res = (res * BigInt(i))
        }
        return res
    }
    return (func(n*2) / pow2(n)) % MOD
};