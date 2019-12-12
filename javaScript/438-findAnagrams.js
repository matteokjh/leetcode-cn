/**
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * 找到字符串中所有字母异位词
 * Medium
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let count = {}
    let marked = {}
    let window = []
    let res = []
    p.split('').forEach(e=>{
        if(!count[e]) count[e] = 0
        count[e]++
    })
    for(let i=0;i<s.length;i++) {
        window.push(s[i])
        if(!marked[s[i]]) marked[s[i]] = 0
        marked[s[i]]++
        if(window.length > p.length) {
            let a = window.shift()
            marked[a]--
        }
        if(window.length === p.length) {
            let state = true
            for(let [key,val] of Object.entries(count))  {
                if(marked[key] !== val) {
                    state = false
                    break
                }
            }
            if(state) res.push(i-p.length+1)
        }
    }
    return res
};