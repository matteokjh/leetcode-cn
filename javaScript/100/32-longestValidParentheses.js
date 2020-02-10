/**
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 最长有效括号
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let arr = [];
    let len = 0;
    let res = 0;
    arr.push(-1)
    for(let i=0;i<s.length;i++){
        let a = s[i];
        if(a == '('){
            arr.push(i);
        } else {
            arr.pop();
            if(arr.length) {
                res = Math.max(i-arr[arr.length-1],res)
            } else {
                arr.push(i)
            }
        }
        console.log(arr)
    }
    return res
}