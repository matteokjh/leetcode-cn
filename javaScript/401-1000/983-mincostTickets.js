/**
 * https://leetcode-cn.com/problems/minimum-cost-for-tickets/
 * 983. 最低票价
 * Medium
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = new Array(366+30).fill(0)
    let len = days.length
    let minDay = days[0]
    let maxDay = days[len-1]
    let k = len-1

    for(let i=maxDay;i>=minDay;i--) {
        if(i === days[k]) {
            dp[i] = Math.min(dp[i+1]+costs[0], dp[i+7]+costs[1], dp[i+30]+costs[2])
            k--
        } else dp[i] = dp[i+1]
    }
    return dp[minDay]
};