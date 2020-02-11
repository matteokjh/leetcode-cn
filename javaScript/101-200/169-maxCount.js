/**
 * https://leetcode-cn.com/problems/majority-element/
 * 求众数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let m = new Map;
    // let max = 0;
    // let theMax;
    // nums.forEach(e=>{
    //     let count = m.get(e)
    //     if(count){
    //         m.set(e,count+1)
    //         if(count+1 > max){
    //             max = count + 1
    //             theMax = e;
    //         }
    //     }else{
    //         m.set(e,1)
    //     }
    // })
    // return theMax == null ? nums[0] : theMax
    
    let count = 1;
    let tag = nums[0]
    for(let i=1;i<nums.length;i++){
        if(count == 0){
            tag = nums[i]
        }
        if(nums[i] == tag){
            count++
        }else{
            count--
        }
    }
    return tag
};