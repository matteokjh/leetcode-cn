/**
 * https://leetcode-cn.com/problems/course-schedule-ii/
 * 课程表 II
 * Medium
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let m = {}
    let res = []
    let queue = []
    let in_degrees = new Array(numCourses).fill(0)
    prerequisites.forEach(e => {
        if(!m[e[1]]) {
            m[e[1]] = []
        }
        m[e[1]].push(e[0])
        in_degrees[e[0]]++
    })
    for(let i=0;i<numCourses;i++) {
        if(!in_degrees[i]) {
            queue.push(i)
        }
    }
    while(queue.length) {
        let top = queue.pop()
        res.push(top)
        if(m[top]) {
            for(let next of m[top]) {
                in_degrees[next] -= 1
                if(!in_degrees[next]) {
                    queue.push(next)
                }
            }
        }
    }
    if(res.length !== numCourses) return []
    return res
};