/**
 * 丑数 --- 质因数只能是 2 3 5
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let res = [1];
    //三指针
    let a = 0;//2
    let b = 0;//3
    let c = 0;//5
    let aa,bb,cc;
    let min;
    for(let i=1;i<n;i++){
        aa = res[a] * 2;
        bb = res[b] * 3;
        cc = res[c] * 5;
        min = Math.min(aa,bb,cc);
        if(min == aa){
            a++;
        }
        if(min == bb){
            b++
        }
        if(min == cc){
            c++
        }
        res.push(min);
    }
    console.log(res)
    return res[n-1]
};

let n = 100;

let res = nthUglyNumber(n);
console.log(res)