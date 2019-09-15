/**
 * https://leetcode-cn.com/problems/combination-sum/
 * 组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let a = 0; //临时数组的元素和
    let arr = []; // 存放临时数组
    candidates.sort((a,b)=>a-b);
    function func(candidates,arr,target,num){
        if(target == 0){
            res.push(arr)
            return
        }
        if(target < candidates[num]) return; //精妙之处
        for(let i=num; i<candidates.length; i++){
            func(candidates,arr.concat(candidates[i]),target-candidates[i],i);
        }
    }

    func(candidates,arr,target,0);

    return res
};