/**
 * https://leetcode-cn.com/problems/integer-to-roman/
 * 整数转罗马数字
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let a = num;
    let res = [];
    let arr = [];
    while(a >= 1){
        res.push(a%10);
        a=~~(a/10);
    }
    
    res.forEach((e, idx)=>{
        let i,j,k;
        switch(idx){
            case 0: i = 'I';j='V';k='IX';break;
            case 1: i = 'X';j='L';k='XC';break;
            case 2: i = 'C';j='D';k='CM';break;
            case 3: i = 'M';break;
        }
        switch(e){
            case 1: arr.push(i);break;
            case 2: arr.push(i+i);break;
            case 3: arr.push(i+i+i);break;
            case 4: arr.push(i+j);break;
            case 5: arr.push(j);break;
            case 6: arr.push(j+i);break;
            case 7: arr.push(j+i+i);break;
            case 8: arr.push(j+i+i+i);break;
            case 9: arr.push(k);break;
        }
    })
    console.log(arr)
    
    return arr.reverse().join('');
};