/**
 * https://leetcode-cn.com/problems/palindrome-partitioning/submissions/
 * 分割回文串
 * Medium
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    function isPalindrome(s) {
        if (!s) return false;
        let a = 0;
        let b = s.length - 1;
        while (a < b) {
            if (s[a] !== s[b]) return false;
            a++;
            b--;
        }
        return true;
    }
    function func(temp, a, b) {
        if (a > b) {
            res.push([...temp]);
            return;
        }
        for (let i = 1; a + i <= b + 1; i++) {
            if (isPalindrome(s.substr(a, i))) {
                temp.push(s.substr(a, i));
                func(temp, a + i, b);
                temp.pop();
            }
        }
    }
    func([], 0, s.length - 1);
    return res;
};

console.log(partition("aab"));
