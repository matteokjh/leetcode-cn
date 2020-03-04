/**
 * https://leetcode-cn.com/problems/distribute-candies-to-people/
 * 1103. 分糖果 II
 * Easy
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let res = new Array(num_people).fill(0)
    let i = 0
    let j = 1
    while(candies > j) {
        candies -= j
        res[i++] += j
        j++
        if(i === num_people) i = 0
    }
    res[i] += candies
    return res
};