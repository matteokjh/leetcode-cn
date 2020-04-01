/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
 * 无重复最长字串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}
    let j = 0
    let res = 0
    for(let i=0;i<s.length;i++) {
        if(map[s[i]]) {
            j = Math.max(map[s[i]], j)
        }
        map[s[i]] = i+1
        res = Math.max(res, i - j + 1)
    }
    return res
};

lengthOfLongestSubstring("abaabcbc");
