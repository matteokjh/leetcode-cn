/**
 * https://leetcode-cn.com/problems/task-scheduler/
 * 任务调度器
 * Medium
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let count = new Array(26).fill(0)
    for(let a of tasks) {
        count[a.charCodeAt() - 65]++
    }
    count.sort((a,b)=>a-b)
    let maxCount = 0
    for(let i = 25;i>=0;i--) {
        if(count[i] !== count[25]) break
        maxCount++
    }
    return Math.max((count[25] - 1) * (n + 1) + maxCount, tasks.length)
};