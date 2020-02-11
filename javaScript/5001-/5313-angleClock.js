/**
 * https://leetcode-cn.com/problems/angle-between-hands-of-a-clock/
 * 时钟指针的夹角
 * Medium
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let minAng = minutes / 60 * 360
    let hourAng = hour / 12 * 360 +  minutes / 60 / 12 * 360
    let res = minAng > hourAng ? minAng - hourAng : hourAng - minAng
    return res > 180 ? 360 - res : res
    
};