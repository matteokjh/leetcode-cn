/**
 * https://leetcode-cn.com/problems/next-permutation/
 * 下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    let state = false;
    if(len <= 1){
        
    }else{
        let end = len-1;
        let start = 0;
        while(end > 0){
            if(nums[end-1] < nums[end]){
                end--;
                state = true;
                break;
            }
            end--;
        }
        if(!state){
            nums.sort((a,b)=>a-b)
        }else{  
            start = end+1;
            while(start < len){
                if(nums[start] > nums[end]){
                    start++;
                    continue;
                }
                break;
            }
            start--;
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            let rec = nums.slice(end+1).sort((a,b)=>a-b);
            nums.splice(end+1,len - end - 1,...rec)
        }

    }
    
};