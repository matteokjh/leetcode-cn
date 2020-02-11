/**
 * https://leetcode-cn.com/problems/gas-station/
 * 加油站
 * Medium
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let rest = 0
    let run = 0
    let start = 0
    for(let i=0;i<gas.length;i++) {
        run += gas[i] - cost[i]
        rest += gas[i] - cost[i]
        if(run < 0) {
            start = i+1
            run = 0
        }
    }
    return rest < 0 ? -1 : start
};