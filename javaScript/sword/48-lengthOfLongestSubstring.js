/**
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * 面试题48. 最长不含重复字符的子字符串
 * Medium
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 0
    let res = 0
    let len = s.length
    let rec = {}
    while(right < len) {
        let tmp = '*'
        while(right < len) {
            tmp = s[right]
            if(!rec[tmp]) rec[tmp] = 0
            rec[tmp]++
            if(rec[tmp] > 1) break
            right++
        }
        res = Math.max(res, right - left)
        while(rec[tmp] > 1) rec[s[left++]]--
        right++
    }
    return res
};