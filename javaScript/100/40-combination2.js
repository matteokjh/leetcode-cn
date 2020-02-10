/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * 组合总和II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let path = [];
    function func(start,target) {
        if(target === 0) {
            res.push([...path])
            return 
        }
        for(let i=start;i<candidates.length && target - candidates[i] >= 0;i++) {
            if(i > start && candidates[i] === candidates[i-1]) {
                continue
            }
            path.push(candidates[i])
            func(i+1,target - candidates[i])
            path.pop()
        }
    }
    candidates.sort((a,b)=>a-b)
    func(0,target)
    return res
};