/**
 * @param {number} num
 * @return {string[]}
 * https://leetcode-cn.com/problems/binary-watch/
 */
var readBinaryWatch = function (num) {
    if(num === 0){
        return '0:00'
    }

    let min = num >= 6 ? num - 5 : 0;
    let max = num >= 4 ? 3 : num;
    let res = [];
    let hour = [8, 4, 2, 1];
    let minute = [32, 16, 8, 4, 2, 1];
    let h = []; //组合情况，视i而定
    let m = [];
    //生成h，m
    function createrH(i, k, a, hour, n) { // k是下标，n是递归次数-结束标志，a是临时变量
        if (n == i) {
            if (a < 12 && a > 0) {
                h.push(''+a);
            }
            return
        }
        for (; k < hour.length; k++) {
            a += hour[k]
            createrH(i, k + 1, a, hour, n + 1)
            a -= hour[k]
        }
    }
    function createrM(i, k, a, minute, n) {
        if (n == i) {
            if (a < 60 && a > 0){
                if (a / 10 < 1){
                    a = '0'.concat(a);
                }
                m.push(''+a);
            }
            return
        }
        for (; k < minute.length; k++) {
            a += minute[k]
            createrM(i, k + 1, a, minute, n + 1)
            a -= minute[k]
        }
    }
    //拿到h，m之后的排列组合函数
    function fin(h,m){
        for(let q=0;q<h.length;q++){
            for(let p=0;p<m.length;p++){ 
                res.push(h[q].concat(':',m[p]))
            }
        }
    }

    //最先执行的函数，并递归执行
    function func(i) {
        h = [];
        m = [];
        let j = num - i;
        createrH(i, 0, 0, hour, 0); //求得对应i的组合先
        createrM(j, 0, 0, minute, 0); //求得对应i的组合先
        //对空数组的特殊处理 [] => '0' || '00' --- 时||分
        if(h.length == 0 && m.length > 0){
            h.push('0')
        }
        if(m.length == 0 && h.length > 0){
            m.push('00')
        }
        
        if (i > max) { //递归终止
            return
        }
        h.sort((a,b)=>a-b)
        m.sort((a,b)=>a-b)

        fin(h,m);
        // console.log(h,m)

        func(i + 1);

    }

    func(min);
    //排序 or not
    // res.sort((a,b)=>{
    //     let h1 = a.split(':')[0];
    //     let m1 = a.split(':')[1];
    //     let h2 = b.split(':')[0];
    //     let m2 = b.split(':')[1];
    //     return +h1*100+ +m1 - (+h2*100+ +m2)
    // })
    return res
};

let a = 2;

let res = readBinaryWatch(a);

console.log(res)