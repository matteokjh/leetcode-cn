/**
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 滑动窗口最大值
 * Hard
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(!nums || !nums.length) {
        return []
    }
    // 1.暴力法
    // let a1 = []
    // for(let i=0;i+k<=nums.length;i++) {
    //     a1.push(Math.max(...nums.slice(i,i+k)))
    // }
    
    // 2.双向队列
    // let queue = []
    // let a2 = []
    // function clean_queue(queue,i) {
    //     return queue.filter(e => e > i - k && e <= i && nums[e] > nums[i])
    // }
    // for(let i=0;i<nums.length;i++) {
    //     queue = clean_queue(queue,i)
    //     if(queue[0] !== null) {
    //         if(nums[queue[0]] > nums[i]) {
    //             queue.push(i)
    //         } else {
    //             queue.unshift(i)
    //         }
    //     } else {
    //         queue.push(i)
    //     }
    //     if(i >= k - 1) {
    //         a2.push(nums[queue[0]])
    //     }
    // }
    
    // 3.动态规划
    let len = nums.length
    let a3 = []
    let left = []
    let right = []
    right[len] = -Infinity
    right[len-1] = nums[len-1]
    let temp = []
    let j
    for(let i=0;i<nums.length;i++) {
        // left
        if(i % k === 0) {
            left[i] = nums[i]
        } else {
            left[i] = Math.max(left[i-1],nums[i])
        }
        // right
        j = len - i - 1
        if((j+1)%k === 0) {
            right[j] = nums[j]
        } else {
            right[j] = Math.max(right[j+1],nums[j])
        }
    }
    for(let i=0;i<=len - k;i++) {
        a3.push(Math.max(left[i+k-1],right[i]))
    }
    
    return a3
};