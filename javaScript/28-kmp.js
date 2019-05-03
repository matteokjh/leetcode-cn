/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 实现字符串查找
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function getNext(p,next){
	next[0] = -1;
	let i = 0, j = -1;

	while (i < p.length)
	{
		if (j == -1 || p[i] == p[j])
		{
			i++;
			j++;
			next[i] = j;
		}	
		else
			j = next[j];
	}
    return next
}
var strStr = function(haystack, needle) {
    // 如果用这样的方法做题会被鄙视吧
    // return haystack.indexOf(needle)
    
    // KMP --- 知乎看到的
    let i = 0; 
    let j = 0;
    let next = getNext(needle,[]);

    while (i < haystack.length && j < needle.length){
        if (j == -1 || haystack[i] == needle[j]) 
        {
            i++;
            j++;
        }
        else 
                j = next[j];
        }

    if (j == needle.length)
       return i - j;
    else 
       return -1;
}