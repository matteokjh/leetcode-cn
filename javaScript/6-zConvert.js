/**
 * https://leetcode-cn.com/problems/zigzag-conversion/
 * z字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 1){
        return s;
    }else{
        let a = [...Array(numRows)].map(() => Array())
        let i = 0; //行
        let j = 0; //列
        let down = 1; //上下行xing
        s.split('').forEach(e=>{
            a[i][j] = e;
            if(down === 1){ //下行
                if(i + 1 === numRows){
                    i = numRows - 2;
                    j++;
                    if(i !== 0) down = 0;
                }else{
                    i++;
                }
            }else if(down === 0){ //上行
                if(i - 1 === 0){
                    i = 0;
                    j++;
                    down = 1;
                }else{
                    i--;
                    j++;
                }
            }
        })
        // a = a.join('').split(',,').join('').split(',').join('');
        let b = '';
        for(let i=0;i<numRows;i++){
            for(let j=0;j<a[i].length;j++){
                if(a[i][j] !== undefined) {
                    b += a[i][j];
                }
            }
        }
        return b
    }
};