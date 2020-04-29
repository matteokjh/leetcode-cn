/**
 * https://leetcode-cn.com/problems/find-in-mountain-array/
 * 1095. 山脉数组中查找目标值
 * Hard
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
function b_search(l, r, target, arr, key) {
    target = key(target)
    while(l <= r) {
        let mid = l + ~~((r-l)/2)
        let t = key(arr.get(mid))
        if(t == target) return mid
        if(t < target) l = mid+1
        else r = mid-1
    }
    return -1
}
var findInMountainArray = function(target, mountainArr) {
    let len = mountainArr.length()
    let left = 0
    let right = len-1
    while(left < right) {
        let mid = left + ~~((right-left)/2)
        if(mountainArr.get(mid) < mountainArr.get(mid+1)) {
            left = mid+1
        } else right = mid
    }
    let peak = left
    let idx = b_search(0, peak, target, mountainArr, x => x)
    if(!~idx) return b_search(peak+1, len-1, target, mountainArr, x => -x)
    else return idx
};