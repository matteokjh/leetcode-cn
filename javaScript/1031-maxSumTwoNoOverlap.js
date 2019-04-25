/**
 * https://leetcode-cn.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
 * 两个非重叠子数组的最大和
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
function add(acc,cur){
    return acc+cur
}
var maxSumTwoNoOverlap = function(A, L, M) { // 子数组长度分别为L，M；求相加最大
    let max = 0;
    let sum = 0;
    for(let i=0;i+L<=A.length;i++){
        let j=0;
        for(;j+M<=i;j++){ // 并列的两个for分别表示在左边和在右边两种情况，不会重叠
            // sum = eval(A.slice(j,j+M).concat(A.slice(i,i+L)).join('+'));
            sum = A.slice(j,j+M).concat(A.slice(i,i+L)).reduce(add)
            sum > max ? max = sum : '';
        }
        for(j=i+L;j+M<=A.length;j++){
            // sum = eval(A.slice(j,j+M).concat(A.slice(i,i+L)).join('+'));
            sum = A.slice(j,j+M).concat(A.slice(i,i+L)).reduce(add)
            sum > max ? max = sum : '';
        }
    }
    return max
};

let a = [8,20,6,2,20,17,6,3,20,8,12]

let res = maxSumTwoNoOverlap(a,5,4);
console.log(res)
