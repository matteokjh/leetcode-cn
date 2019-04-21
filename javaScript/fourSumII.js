/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 * https://leetcode-cn.com/problems/4sum-ii/
 */
var fourSumCount = function(A, B, C, D) { // 四数和为0的四元组的个数

    let res = 0;
    let map = new Map();
    
    A.forEach(e=>{
        B.forEach(f=>{
            if(!map.get(e+f)){
                map.set(e+f,1)
            }else{
                let a = map.get(e+f)+1;
                map.set(e+f,a)
            }
        })
    })
    C.forEach(e=>{
        D.forEach(f=>{
            if(map.get(-e-f)){
                res += map.get(-e-f)
            }
        })
    })

    return res;
};

let A,B,C,D;

A = [-1,-1]
B = [-1,1]
C = [-1,1]
D = [1,-1]

let res = fourSumCount(A,B,C,D);

console.log(res);