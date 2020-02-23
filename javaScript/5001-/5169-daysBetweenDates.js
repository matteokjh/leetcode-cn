/**
 * https://leetcode-cn.com/problems/number-of-days-between-two-dates/
 * 5169. 日期之间隔几天
 * Easy
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    return new Date(Math.abs(new Date(date1).getTime() - new Date(date2).getTime())) / 86400000
};