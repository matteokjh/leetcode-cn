/**
 * https://leetcode-cn.com/problems/group-anagrams-lcci/
 * 面试题 10.02. 变位词组
 * Medium
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = []
    let map = {}
    let i = 0
    for(let str of strs) {
        let s = str.split('').sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')
        if(map[s] === undefined) {
            res[i] = []
            map[s] = i++
        }
        res[map[s]].push(str)
    }
    return res
};