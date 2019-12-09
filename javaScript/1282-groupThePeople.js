/**
 * https://leetcode-cn.com/problems/group-the-people-given-the-group-size-they-belong-to/
 * 用户分组
 * Medium
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let m = {}
    let res = []
    let j = 0
    for(let i=0;i<groupSizes.length;i++) {
        if(!m[groupSizes[i]]) {
            m[groupSizes[i]] = []
        }
        m[groupSizes[i]].push(i)
    }
    for(let [key,val] of Object.entries(m)) {
        while(val.length) {
            if(!res[j]) {
                res[j] = []
            }
            res[j].push(val.shift())
            if(res[j].length === +key) {
                j++
            }
        }
    }
    return res
};