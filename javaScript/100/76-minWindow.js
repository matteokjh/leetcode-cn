/**
 * https://leetcode-cn.com/problems/minimum-window-substring/submissions/
 * 最小覆盖子串
 * Hard
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0 // 左指针
    let right = 0 // 右指针
    let start = 0 // 结果字符串起点下标
    let needs = {} // t的map
    let windw = {} // 滑动窗口的map
    let len = Infinity // 结果字符串的长度
    let match = 0 // 符合t的个数
    let sLen = s.length

    // 1. 初始化needs，表示T包含的字符及个数
    t.split('').forEach(e => {
        if (!needs[e]) {
            needs[e] = 0
        }
        needs[e]++
    })
    let needLen = Object.keys(needs).length

    // 2. 开始表演
    while (right < sLen) {
        // 结束条件是右指针扫完
        let c1 = s[right]
        right++ // 右指针一直往右
        if (needs[c1]) { // 如果是T中包含的字符，windw也把它包进去
            if (!windw[c1]) {
                windw[c1] = 0
            }
            windw[c1]++
            if (needs[c1] === windw[c1]) { // 如果该字符数量达标
                match++
            }
        }
        while (match === needLen) {
            // 当T的所有字符都能在windw中找到
            let c2 = s[left]
            if (right - left < len) { // 如果长度更小，改变结果
                start = left
                len = right - left
            }
            if (needs[c2]) { // 滑动窗口左边开始收缩
                windw[c2]--
                if (windw[c2] < needs[c2]) { // 数量不够时达标数字减少
                    match--
                }
            }
            left++
        }
    }
    return len === Infinity ? "" : s.substring(start, start + len) // len没有发生过变化则返回 “ ”
};