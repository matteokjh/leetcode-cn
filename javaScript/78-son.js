/**
 * https://leetcode-cn.com/problems/subsets/
 * 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    for(let i=0;i<nums.length;i++){
        res.forEach(e=>{
            res.push(e.concat(nums[i]))
        })
    }
    return res;
};

let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
let res = subsets(a);
console.log(res)