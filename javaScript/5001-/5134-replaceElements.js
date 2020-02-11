/**
 * https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/
 * 将每个元素替换为右侧最大元素
 * Easy
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let tmp = arr[arr.length-1]
    arr[arr.length-1] = -1
    for(let i=arr.length-2;i>=0;i--) {
        let a = arr[i]
        arr[i] = tmp
        tmp = Math.max(tmp,a)
    }
    return arr
};