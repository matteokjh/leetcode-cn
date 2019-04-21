/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * https://leetcode-cn.com/problems/combination-sum/comments/
 */
var combinationSum = function(candidates, target) {
    //巧妙之处在于target渐减至0
    let res = [];
    let a = 0; //临时数组的元素和
    let arr = []; // 存放临时数组
    candidates.sort((a,b)=>a-b); //必须先排序才能使精妙之处work
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

let a = [[2,3,5], 8]; // [candidates, target]

let res = combinationSum(...a);

console.log(res)