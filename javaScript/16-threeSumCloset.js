/**
 * https://leetcode-cn.com/problems/3sum-closest/
 * 最接近的三数和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) {
        return 0;
    }
    let arr = nums.sort((a, b) => a - b);
    let i = 0, j = 1, k = 0;
    let res = 0;
    let q;
    let p = Infinity;
    let a, b, c;
    while (1) {
        a = arr[i];
        b = arr[j];
        c = arr[arr.length - 1 - k];
        res = target - a - b - c;
        res >= 0 ? '' : res = -res;
        if (res === 0) {
            q = target;
            break;
        } else {
            if (res < p) {
                p = res;
                q = a + b + c;
            }
            k++;
            while (arr[arr.length - 1 - k] === arr[arr.length - k] && arr.length - 1 - k > j + 1) {
                k++;
            }
            if (arr.length - 1 - k <= j) { //遍历终止条件
                k = 0;
                j++;
                while (arr[j] === arr[j - 1] && j < arr.length - 2) {
                    j++;
                }
                if (j === arr.length - 1) {
                    i++;
                    j = i + 1;
                    if (i === arr.length - 2) { //循环终止条件
                        break;
                    }
                }
            }
        }
    }
    return q
};