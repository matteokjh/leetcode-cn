/**
 * https://leetcode-cn.com/problems/ju-qing-hong-fa-shi-jian/
 * LCP 08. 剧情触发时间
 * Medium
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function(increase, requirements) {
    function biSearch(arr, target) {
        if(target > arr[arr.length-1]) return arr.length
        let left = 0
        let right = arr.length-1
        while(left < right) {
            let mid = ~~((left + right) / 2)
            if(arr[mid] < target) {
                left = mid + 1
            } else right = mid
        }
        return left
    }
    let a = [0]
    let b = [0]
    let c = [0]
    for(let arr of increase) {
        a.push(a[a.length-1]+arr[0])
        b.push(b[b.length-1]+arr[1])
        c.push(c[c.length-1]+arr[2])
    }
    return requirements.map(e => {
        let res = Math.max(biSearch(a, e[0]), biSearch(b, e[1]), biSearch(c, e[2]))
        return res > increase.length ? -1 : res
    })
};