/**
 * https://leetcode-cn.com/problems/guess-numbers/
 * LCP 01. 猜数字
 * Easy
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    return (guess[0] === answer[0]) + (guess[1] === answer[1]) + (guess[2] === answer[2])
};