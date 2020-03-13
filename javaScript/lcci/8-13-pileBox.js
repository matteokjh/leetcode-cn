/**
 * https://leetcode-cn.com/problems/pile-box-lcci/
 * 面试题 08.13. 堆箱子
 * Hard
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function(box) {
    if(!box.length) return 0

    box.sort((a,b) => a[2] - b[2])
    let len = box.length
    let dp = new Array(len).fill(0)
    dp[0] = box[0][2]
    let res = dp[0]
    for(let i=1;i<len;i++) {
        dp[i] = box[i][2]
        for(let j=0;j<i;j++) {
            if(isSmaller(box[j], box[i])) {
                dp[i] = Math.max(dp[i], dp[j] + box[i][2])
            }
        }
        res = Math.max(res, dp[i])
    }
    function isSmaller(a, b) {
        return a[0] < b[0] && a[1] < b[1] && a[2] < b[2]
    }
    return res
};