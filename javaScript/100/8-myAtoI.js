/**
 * https://leetcode-cn.com/problems/reverse-integer/submissions/
 * 字符串转换整数
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (!str) return 0;
    let i = 0;
    while (str[i] === " ") i++;
    let sign = "";
    let res = "";
    if (str[i] === "+" || str[i] === "-") {
        sign = str[i];
    } else if (isNaN(+str[i])) return 0;
    else res += str[i];
    i++;
    while (i < str.length) {
        if (isNaN(+str[i]) || str[i] === " ") break;
        res += str[i];
        i++;
    }
    if (!res) return 0;
    res = sign + res;
    if (+res > 2 ** 31 - 1) res = 2 ** 31 - 1;
    if (+res < -(2 ** 31)) res = -(2 ** 31);
    return +res;
};
