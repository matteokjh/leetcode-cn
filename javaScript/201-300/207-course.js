/**
 * https://leetcode-cn.com/problems/course-schedule/submissions/
 * 课程表
 * medium
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let row = prerequisites.length
    let m = new Array(numCourses).fill(0) // 记录访问情况
    let matrix = [...new Array(numCourses)].map(()=>[]) // 邻接矩阵
    for(let i=0;i<row;i++) {
        m[i] = 0 // 0 --- 未访问，-1 --- 被其它轮次访问；1 --- 被当前轮次访问(存在环)
        matrix[prerequisites[i][1]].push(prerequisites[i][0])
    }
    function func(i,matrix,m){
        if(m[i] === 1) {
            return false
        }
        if(m[i] === -1) {
            return true
        }
        m[i] = 1
        for(let j=0;matrix[i] && j<matrix[i].length;j++) {
            if(!func(matrix[i][j],matrix,m)) {
                return false
            }
        }
        m[i] = -1
        return true
    }
    for(let i=0;i<numCourses;i++) {
        if(!func(i,matrix,m)) {
            return false
        }
    }
    return true
    
};