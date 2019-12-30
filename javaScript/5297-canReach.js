/**
 * https://leetcode-cn.com/problems/jump-game-iii/
 * 跳跃游戏 III
 * Medium
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let dp = new Array(arr.length).fill(0)
    let zero = []
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === 0) {
            zero.push(i)
        }
    }
    function two(i) {
        if(i < 0 || i > arr.length || dp[i]) return
        dp[i] = 1
        two(i-arr[i])
        two(i+arr[i])
    }
    two(start)
    return zero.some(e=>dp[e])
};