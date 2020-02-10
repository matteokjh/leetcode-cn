/**
 * https://leetcode-cn.com/problems/group-anagrams/submissions/
 * 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = {}
    let res = []
    strs.forEach(e=>{
        let a = e.split('').sort((a,b)=>{
            if(a>b) return 1
            else return -1
        }).join('')
        if(m[a] !== undefined) {
            res[m[a]].push(e)
        } else {
            m[a] = res.length
            res[m[a]] = [e]
        }
    })
    return res
};