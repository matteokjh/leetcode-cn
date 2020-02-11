/**
 * https://leetcode-cn.com/problems/two-city-scheduling/
 * 两地调度
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // 贪心算法
    costs.sort((a,b)=>(a[0]-a[1])-(b[0]-b[1]));
    let res = 0;
    for(let i=0;i<costs.length/2;i++){
        res += costs[i][0] + costs[i+costs.length/2][1];
    }
    return res
};

let a = [[10,20],[30,200],[400,50],[30,20]];

let res = twoCitySchedCost(a);
console.log(res);