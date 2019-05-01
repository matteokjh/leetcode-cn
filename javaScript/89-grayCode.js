/**
 * https://leetcode-cn.com/problems/gray-code/
 * 格雷码
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    // 评论的方法，格雷码的计算方法
    let res = []
    for(let i=0;i< 1 << n;i++){
        res.push(i ^ i>>1)
    }
    return res
    
};