/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = strs[0];
    
    if(!res){
        return ""
    }
    //先去重一次
    let arr = [];
    strs.forEach(e=>{
        if(!arr.some(f=>f===e)){
            arr.push(e);
        }
    })
    
    for(let i=0; i<arr.length - 1; i++){
        if(res.indexOf(arr[i+1]) === 0){
            res = arr[i+1];
            continue;
        }
        
        let j = 1;
        while(1){
            if(res.indexOf(arr[i+1].slice(0,j)) !== 0){
                res = arr[i+1].slice(0, j-1)
                console.log(res)
                break;
            }else{
                j++
            }
        }
    }
    
   return res
    
    
};