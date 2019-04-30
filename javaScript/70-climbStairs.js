/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // dp
    // if(n<=0){
    //     return 0;
    // }
    // if(n == 1){
    //     return 1
    // }
    // if(n == 2){
    //     return 2
    // }
    // let res;
    // let i = 1, j = 2;
    // let k = 3;
    // while(k <= n){
    //     res = i+j;
    //     i = j;
    //     j = res;
    //     k++
    // }
    // return res

    // 组合Fibonacci，神仙解法
    let d = Math.sqrt(5);
    n++;
    return ~~(( ((1 + d) / 2)**n - ((1 - d) / 2)**n ) / d + 0.5);
};

let res = climbStairs(44)
console.log(res)