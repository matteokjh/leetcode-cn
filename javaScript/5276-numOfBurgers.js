/**
 * https://leetcode-cn.com/problems/number-of-burgers-with-no-waste-of-ingredients/
 * 不浪费原料的汉堡制作方案
 * Medium
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    let a = tomatoSlices
    let b = cheeseSlices
    if(a < 2*b || (a - 2*b)%2 !== 0) {
        return []
    }
    let x = (a - 2*b)/2
    let y = b - x
    if(x >= 0 && y >= 0) {
        return [x,y]
    } else {
        return []
    }
    
};