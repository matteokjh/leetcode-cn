/**
 * https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended/
 * 5342. 最多可以参加的会议数目
 * Medium
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    // 贪心
    // events.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
    // let s = new Set();
    // for (let event of events) {
    //     for (let i = event[0]; i <= event[1]; i++) {
    //         if (!s.has(i)) {
    //             s.add(i);
    //             break;
    //         }
    //     }
    // }
    // return s.size;
    // 优先队列（伪）
    let res = 0;
    let pos = 0;
    let len = events.length;
    let queue = [];
    events.sort((a, b) => {
        return a[0] - b[0];
    });
    for (let i = 1; i <= 10 ** 5; i++) {
        while (pos < len && events[pos][0] === i) {
            // 二分插入
            let left = 0;
            let right = queue.length;
            let num = events[pos][1];
            while (left < right) {
                let mid = left + ~~((right - left) / 2);
                if (num > queue[mid]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            queue.splice(left, 0, num);
            pos++;
        }
        // 去掉过了时间的会议
        while (queue && queue[0] < i) {
            queue.shift();
        }
        // 最小元素出栈
        if (queue.length) {
            queue.shift();
            res++;
        }
    }
    return res;
};
