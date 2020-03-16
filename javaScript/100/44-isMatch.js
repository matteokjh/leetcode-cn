/**
 * https://leetcode-cn.com/problems/wildcard-matching/comments/
 * 通配符匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = (j = 0);
    let m = s.length;
    let n = p.length;
    let iStar = -1;
    let jStar = -1;
    while (i < m) {
        if (j < n && (s[i] === p[j] || p[j] === "?")) {
            i++;
            j++;
        } else if (j < n && p[j] === "*") {
            iStar = i;
            jStar = j++;
        } else if (iStar >= 0) {
            i = ++iStar;
            j = jStar + 1;
        } else return false;
    }
    while (j < n && p[j] === "*") j++;
    return j === n;
};
