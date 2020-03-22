/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
 * 无重复最长字串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let m = {};
    let res = 0;
    let pre = 0;
    for (let i = 0; i < s.length; i++) {
        if (m[s[i]] !== undefined) {
            pre = Math.max(pre, m[s[i]]);
        }
        res = Math.max(res, i - pre + 1);
        m[s[i]] = i + 1;
    }
    return res;
};

lengthOfLongestSubstring("abaabcbc");
