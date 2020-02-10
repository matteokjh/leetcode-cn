/** 
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
 * 无重复最长字串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === '')return 0;
    else{
        let a = s.split('');
        let b = new Array(a.length);
        let c = new Array(a.length);
        let j = 0;
        b.fill(1);
        c.fill("")
        a.forEach((e,idx)=>{
            for(let i = idx+1;i<a.length;i++){
                if(c[j] === '') c[j] = e;

                if(a[i] === e){

                    break;
                }else{
                    if(c[j].indexOf(a[i]) !== -1){
                        break;
                    }
                    b[idx]++;
                    c[j] = c[j].concat(a[i])

                    // console.log(a[i],c[j])
                }
            }
            j++;
        })
        // console.log(c)
        // console.log(b)
        return Math.max(...b)
    }
    
};

lengthOfLongestSubstring('abaabcbc')