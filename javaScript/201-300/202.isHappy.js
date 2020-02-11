/**
 * https://leetcode-cn.com/problems/happy-number/
 * 快乐数
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let res = [];
    let a = [];
    let num = n;
    while(1){
        a = num.toString().split('');
        num = a.reduce((acc,cur)=>acc+cur**2,0);
        if(num == 1){
            return true;
        }
        if(res.some(e=>e==num)){
            return false;
        }
        res.push(num);
    }
};

let a = 2;
let res = isHappy(a);
console.log(res);