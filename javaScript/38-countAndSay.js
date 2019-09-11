/**
 * https://leetcode-cn.com/problems/count-and-say/submissions/
 * 报数
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let a = "1";
    for(let i=1;i<n;i++) {
        let b=1;
        let s = ""
        for(let j=0;j<a.length;j++) {
            if(a[j+1] === a[j]) {
                b++;
            } else {
                s += b + "" + a[j]
                b=1;
            }
        }
        a = s;
    }
    return a
};