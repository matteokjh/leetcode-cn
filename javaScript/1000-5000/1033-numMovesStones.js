/**
 * 
 * 移动石头
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let arr = [a,b,c].sort((a,b)=>a-b)
    a = arr[0];
    b = arr[1];
    c = arr[2];
    let max = 0;
    let min = 0;
    
    for(let i=a;i<b-1;i++){
        max++;
    }
    for(let i=c;i>b+1;i--){
        max++;
    }
    if(a<b-1 && c > b+1){
        if(b-2==a || b+2==c){
            min = 1;
        }else{   
            min = 2;
        }
    }else if(a+1==b && b+1 == c){
        min = 0;    
    }else{
        min = 1
    }
    
    
    return [min,max];
};