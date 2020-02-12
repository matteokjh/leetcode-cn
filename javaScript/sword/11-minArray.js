/**
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * 面试题11 旋转数组的最小数字  
 * Easy
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    // return Math.min(...numbers)
    let left = 0
    let right = numbers.length-1
    while(left < right) {
        let mid = left + ~~((right - left)/2)
        if(numbers[mid] > numbers[right]) {
            left = mid + 1
        } else if(numbers[mid] === numbers[right]) {
            right--
        } else {
            right = mid
        }
    }
    return numbers[left]
};