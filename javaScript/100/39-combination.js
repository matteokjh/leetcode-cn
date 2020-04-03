/**
 * https://leetcode-cn.com/problems/combination-sum/
 * 组合总和
 * Medium
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let len = candidates.length;
    function backtrack(i, sum, tmp) {
        if (sum > target || i === len) return;
        if (sum === target) {
            res.push([...tmp]);
            return;
        }
        tmp.push(candidates[i]);
        backtrack(i, sum + candidates[i], tmp);
        tmp.pop();
        backtrack(i + 1, sum, tmp);
    }
    backtrack(0, 0, []);
    return res;
};
