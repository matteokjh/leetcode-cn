/**
 * 30-串联所有单词的子串
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/comments/
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let f = words[0];
    if(!f){
        return []
    }
    let wlen = f.length;
    let temp;
    let w = [...words];
    let count=0,left=0,right=0;
    let res = [];
    while(right + wlen <= s.length){
        let state = false;
        temp = s.slice(right,right + wlen)
        right += wlen;
        for(let i=0;i<w.length;i++){
            if(w[i] == temp){
                state = true;
                w.splice(i,1)
                count++;
                break;
            }
        }
        // console.log(temp,left,right,count)
        if(!state){ // 不存在
            left ++;
            right = left;
            count = 0;
            w = [...words];
            continue;
        }
        if(count == words.length){ // 满足条件，push进结果数组，重置条件，继续迭代
            res.push(left)
            count = 0;
            w = [...words];
            left ++;
            right = left;
        }
    }
    return res
    
};