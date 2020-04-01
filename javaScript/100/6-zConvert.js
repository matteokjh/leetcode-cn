/**
 * https://leetcode-cn.com/problems/zigzag-conversion/
 * z字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let res = new Array(numRows).fill("");
    let t = "down"; // 一开始是下行
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        res[j] += s[i];
        if (t === "down") {
            j++;
        } else j--;
        if (j === 0) t = "down";
        if (j === numRows - 1) t = "up";
    }
    return res.reduce((acc, cur) => acc + cur, "");
};
