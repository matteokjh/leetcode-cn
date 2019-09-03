/**
 * https://leetcode-cn.com/problems/valid-sudoku/submissions/
 * 有效的数独
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let m1,m2,m3;
    for(let i=0;i<9;i++) { // 每次检查行列宫
        m1 = {};        
        m2 = {};
        m3 = {};
        // 行
        for(let t=0;t<board[i].length;t++) {
            let e = board[i][t];
            if(e != '.') {
                if(m1[e]) {
                    return false
                }
                m1[e] = 1;
            }
        }
        // 列
        for(let j=0;j<9;j++) {
            let a = board[j][i];
            if(a != '.') {
                if(m2[a]) {
                    return false
                }
                m2[a] = 1;
            }
        }
        // 宫
        for(let k=i%3*3;k<i%3*3+3;k++) {
            for(let l=i-i%3;l<i-i%3+3;l++) {
                let a = board[k][l];
                if(a != '.') {
                    if(m3[a]) {
                        return false
                    }
                    m3[a] = 1;
                }
            }
        }
    }
    return true
};