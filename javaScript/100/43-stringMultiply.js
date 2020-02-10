/**
 * https://leetcode-cn.com/problems/multiply-strings/
 * 字符串相乘(大整数相乘)
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 == 0 ||num2 == 0){
        return '0'
    }
    let rec = [];
    let res = '';
    let m = 0, n = 0;
    let len2 = num2.length, len1 = num1.length;
    for (let i = len2 - 1; i >= 0; i--) {
        m = n;
        for (let j = len1 - 1; j >= 0; j--) {
            let s = num2[i] * num1[j];
            if (rec[m]) {
                rec[m].push(s % 10);

            } else {
                rec[m] = [s % 10]
            }
            if (rec[m + 1]) {
                rec[m + 1].push(Math.floor(s / 10));
            } else {
                rec[m + 1] = [Math.floor(s / 10)]
            }
            m++;
        }
        n++;
    }
    let cin = 0;
    for (let i = 0; i < rec.length; i++) {
        let sum = rec[i].reduce((acc, cur) => acc + cur) + cin;
        cin = sum > 9 ? Math.floor(sum / 10) : 0;
        sum = sum % 10;
        res = sum.toString().concat(res);
    }
    if (res[0] == 0) res = res.substr(1);
    return res
};

// 竖式计算
// 5 4 3 2 1 0 => idx
//       1 2 3 
//   x   4 5 6 
// --------------
//         1 8
//       1 2
//       6
//       1 5
//     1 0
//     5
//     1 2
//     8
//   4
// --------------
//   5 6 0 8 8 => res


let a = [['123', '456'], ['2', '3'], ['1234', '5678']];

function test(a) {
    a.forEach(e => {
        console.log('input => ', e, 'res => ', multiply(...e))
    });
}

test(a)