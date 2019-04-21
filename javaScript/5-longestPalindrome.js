/**
 * https://leetcode-cn.com/submissions/detail/12548793/
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //格式化字符串
    console.log(s)
    s = s.split('')
    s = s.map(e=>{
        return '#' + e
    })
    s.push('#')
    s = s.join('');
    let S = s;

    console.log('初始化：' + s);
    //格式化完毕，每个字符两端加了井号#

    let radius = new Array(s.length); 
    let R = -1; //最右回文右边界
    let c = -1; //最右回文对称中心
    let max = 0;
    s = s.split('');
    let i = 0;
    s.forEach((e,idx)=>{
        radius[i] = R > i ? Math.min(radius[2*c-i],R-i+1):1;
        while(i+radius[i] < s.length && i-radius[i] > -1){
            if(s[i-radius[i]] == s[i+radius[i]]){
                radius[i]++;
            }else{
                break;
            }
        }
        if(i+radius[i]>R){
            R=i+radius[i]-1;
            c=i;
        }

        if(max > radius[i]){
            max = max;
        }else{
            max = radius[i]
            C = c;
        }

        i++;
    })
    console.log(C,max)
    let res = s.slice(C-max+1,C+max).join('').split('#').join('');
    console.log(res)
    return res;
};