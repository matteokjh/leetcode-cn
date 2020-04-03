/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * 组合总和II
 * Medium
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let len = candidates.length;
    candidates.sort((a, b) => a - b);
    function backtrack(i, sum, tmp) {
        if (sum > target || i > len) return;
        if (sum === target) {
            res.push([...tmp]);
            return;
        }
        for (let j = i; j < len; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            if (sum + candidates[j] > target) return;
            tmp.push(candidates[j]);
            backtrack(j + 1, sum + candidates[j], tmp);
            tmp.pop();
        }
    }
    backtrack(0, 0, []);
    return res;
};
