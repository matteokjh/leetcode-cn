/**
 * https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 * 面试题46. 把数字翻译成字符串
 * Medium
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let res = 0
    num = num.toString()
    function dfs(i) {
        if(i >= num.length) {
            res++
            return
        }
        dfs(i+1)
        let tmp = +(num[i] + num[i+1])
        if(num[i] !== '0' && tmp >= 0 && tmp < 26 ) {
            dfs(i+2)
        }
    }
    dfs(0)
    return res
};