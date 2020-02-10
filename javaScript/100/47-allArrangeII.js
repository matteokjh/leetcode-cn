/**
 * https://leetcode-cn.com/problems/permutations-ii/
 * 全排列II
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b)
    let res = nums.reduce((prev,next)=>{
        if(prev.length===0) return [[next]]
        let res=[]
        let len=prev[0].length+1;
        for(let i=0;i<len;i++){
            for(let j=0;j<prev.length;j++){
                let t = prev[j].slice();
                t.splice(i,0,next);
                res.push(t)
            }
        }
        return res
        },[])
    let hash = {};
    let arr = [];
    res.forEach(e=>{
        if(!hash[e]){
            hash[e] = true;
            arr.push(e)
        }
    })
    return arr
};