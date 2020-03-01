/**
 * https://leetcode-cn.com/problems/rank-teams-by-votes/
 * 5345. 通过投票对团队排名
 * Medium
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    if(votes.length === 1) return votes[0]
    let m = [...new Array(26)].map((e, idx) => [idx, 0])
    let res = ''
    let a = ('A').charCodeAt()
    let len = votes.length
    for(let str of votes) {
        for(let i=0;i<str.length;i++) {
            let idx = str[i].charCodeAt()-a
            if(!m[idx][1]) m[idx][1] = BigInt(0)
            m[idx][1] += BigInt(len**(26 - i))
        }
    }
    // console.log(m)
    return m.filter(e => e[1] !== 0).sort((a,b) => b[1] - a[1]).map(e => String.fromCharCode(e[0] + a)).join('')
};