/**
 * https://leetcode-cn.com/problems/valid-triangle-number/
 * 611. 有效三角形的个数
 * Medium
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let res = 0
    nums.sort((a,b) => a-b)
    let len = nums.length
    for(let i=len-1;i>=0;i--) {
        let l = 0
        let r = i-1
        while(l < r) {
            if(nums[l] + nums[r] > nums[i]) {
                res += r-l
                r--
            } else l++
        }
    }
    return res
};