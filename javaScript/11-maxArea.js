/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let a;
    for(let i = 0;i < height.length;i++){
        let s = height[i];
        for(let j = i+1;j<height.length;j++){
            let p = height[j];
            let m;
            m = s <= p ? (j-i)*s : (j-i)*p; 
            a = a > m ? a : m;
        }
    }
    return a;
};