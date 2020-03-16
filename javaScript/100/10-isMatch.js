/**
 * https://leetcode-cn.com/problems/regular-expression-matching/
 * 正则匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = {};
    function backtrack(i, j) {
        if (memo[[i, j]] !== undefined) return memo[[i, j]];
        if (j === p.length) return i === s.length;
        let ans = false;
        let tmp = i < s.length && (s[i] === p[j] || p[j] === ".");
        if (p[j + 1] === "*") {
            ans = backtrack(i, j + 2) || (tmp && backtrack(i + 1, j));
        } else {
            ans = tmp && backtrack(i + 1, j + 1);
        }
        memo[[i, j]] = ans;
        return ans;
    }
    return backtrack(0, 0);
};
