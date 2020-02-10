/**
 * https://leetcode-cn.com/problems/permutations/
 * 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return nums.reduce((prev,next)=>{
        if(prev.length===0) return [[next]]
        let res=[]
        let len=prev[0].length+1;
        for(let i=0;i<len;i++){
            prev.forEach(it=>{
                let t=it.slice();
                t.splice(i,0,next)
                res.push(t)
            })
        }
        // console.log(prev,next,res)
        return res
    },[])
};