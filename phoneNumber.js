/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 电话号码的全组合
 */

 function letterCombinations(digits) { // BFS
    if(digits.length == 0){
        return []
    }
    let m = new Map([[2,'abc'],[3,'def'],[4,'ghi'],[5,'jkl'],[6,'mno'],[7,'pqrs'],[8,'tuv'],[9,'wxyz']]); // 映射关系
    let queue = digits.split(''); // 临时队列
    let str = ''; // 临时字符串
    let res = []; // 结果
    func(str, m, queue, digits, res, 0);

    console.log(res)
    return res;

    function func(str, m, queue, digits, res, k){ // 递归函数
        if(str.length === digits.length){
            res.push(str)
            return ;
        }
        
        m.get(+queue[k]).split('').forEach(w=>{
            // console.log(w);
            str += w;
            func(str, m, queue, digits, res, k+1);
            str = str.slice(0,-1); // 每次调用完func函数表示当前组合已经组合完毕，一个字符应该出栈
        })
        return;
    }

};

let a = '23';

let res = letterCombinations(a);
