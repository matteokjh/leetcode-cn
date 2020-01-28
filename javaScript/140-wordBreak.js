/**
 * https://leetcode-cn.com/problems/word-break-ii/
 * 单词拆分 II
 * Hard
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    function dfs(s, map) {
        if(map[s]) return map[s]
        if(!s) return ['']
        
        let res = []
        for(let word of wordDict) {
            if(s.substr(0, word.length) !== word) {
                continue
            }
            let temp = [...dfs(s.substr(word.length), map)]
            for(let item of temp) {
                res.push(word + (item.length ? ' ': '') + item)
            }
        }
        map[s] = [...res]
        return res
    }
    return dfs(s, {})
};