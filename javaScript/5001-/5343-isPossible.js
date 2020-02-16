/**
 * https://leetcode-cn.com/problems/construct-target-array-with-multiple-sums/
 * 5343. 多次求和构造目标数组
 * Hard
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    let sum = target.reduce((acc,cur)=>acc+cur)
    const arr = target.sort((a, b) => b - a);
    while (sum > target.length) {
        if (arr[0] * 2  - sum < 1) return false;
        // 删除队头
        sum -= arr[0];
        // 加入 t
        let t = arr[0] - sum;
        sum += t;
        arr.splice(0, 1);
        // 插入 t
        let l = 0;
        let r = arr.length
        while (l < r) {
            let m = l + ~~((r-l)/2)
            if (arr[m] > t) {
                l = m + 1;
            } else {
                r = m
            }
        }
        arr.splice(l, 0, t);
    }
    return true;
};