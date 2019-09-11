/**
 * https://leetcode-cn.com/problems/sudoku-solver/
 * 解数独
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function solveSudoku(board) {
    this.isSolved = false;
    this.n = 3; // 宫的大小
    this.N = 9; // 宽高
    // 行
    this.row = [...new Array(this.N)].map(e=>new Array(this.N+1).fill(0))
    // 列
    this.col = [...new Array(this.N)].map(e=>new Array(this.N+1).fill(0))
    // 宫
    this.box = [...new Array(this.N)].map(e=>new Array(this.N+1).fill(0))
    this.board = board;
    // 判断是否可以放这个数字
    function couldPlace(r,c,d){
        let idx = ~~(r / this.n) * this.n + ~~(c / 3); // 宫的下标
        return this.row[r][d] + this.col[c][d] + this.box[idx][d] === 0
    }
    // 放置数字
    function placeNumber(r, c, d){
        let idx = ~~(r / this.n) * this.n + ~~(c / 3); // 宫的下标
        this.row[r][d]++;
        this.col[c][d]++;
        this.box[idx][d]++;
        this.board[r][c] = d+"";
    }
    // 移除
    function removeNumber(r,c,d) {
        let idx = ~~(r / this.n) * this.n + ~~(c / 3); // 宫的下标
        this.row[r][d]--;
        this.col[c][d]--;
        this.box[idx][d]--;
        this.board[r][c] = '.';
    }
    // 回溯
    this.backtrack = (r, c) => {
        if(this.board[r][c] === '.') {
            for(let i=1;i<10;i++) {
                if(couldPlace(r,c,i)) { // 能放就放
                    placeNumber(r,c,i);
                    this.placeNextNumber(r,c); // 然后到下一个位置
                    if(!this.isSolved) {
                        removeNumber(r,c,i)
                    }
                }
            }
        } else {
            this.placeNextNumber(r,c); // 到下一个位置
        }
    }
    // 放下一个
    this.placeNextNumber = (r, c) => {
    //     能到最后就是正解
        if(r === this.N - 1 && c === this.N - 1) {
            this.isSolved = true
            console.log(this.board)
        } else { // 否则走到下一个位置
            if(c === this.N - 1) {
                this.backtrack(r+1,0)
            } else {
                this.backtrack(r,c+1)
            }
        }
    }
    
    for(let i=0;i<this.N;i++) {
        for(let j=0;j<this.N;j++) {
            if(this.board[i][j]!== '.') {
                placeNumber(i,j,this.board[i][j])
            }
        }
    }
    this.backtrack(0,0); // 回到0，0开始填数
};

