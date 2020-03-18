/**
 * https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/
 * 659. 分割数组为连续子序列
 * Medium
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let map = {}
    for(let num of nums) {
        if(!map[num]) map[num] = 0
        map[num]++
    }
    for(let num of nums) {
        let count = 0
        let cur = num
        let pre = 1 // 过滤 map 为 0 的 key，至少从 1 开始
        while(map[cur] >= pre) { // 下一个数字不能比上一个小
            pre = map[cur]
            map[cur]--
            count++
            cur++
        }
        if(count > 0 && count < 3) {
            return false
        }
    }
    return true
};