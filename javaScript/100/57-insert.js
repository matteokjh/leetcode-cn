/**
 * https://leetcode-cn.com/problems/insert-interval/
 * 插入区间
 * Hard
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(!intervals || !intervals.length) return [newInterval]
    let res = []
    let [x2,y2] = newInterval
    let tmpX
    let start = 0
    for(let i=0;i<intervals.length;i++) {
        let arr = intervals[i]
        let [x1,y1] = arr
        if(!start) { // 未开始插入
            if(x2 > x1) { // 新结点左边界较大
                if(x2 > y1) { // 超过当前元素右边界，看下一个
                    res.push(arr)
                    if(i < intervals.length - 1) {
                        continue
                    } else {
                        res.push(newInterval)
                        break
                    }
                }else if(y2 <= y1) { // 新结点是当前元素子集，结束
                    return intervals
                } else { // 开始插入，当前元素左边界较小
                    if(i < intervals.length - 1) {
                        tmpX = x1
                        start = 1
                    } else { // 没有下一个元素了，直接结束
                        res.push([x1,y2])
                    }
                }
            } else { // 新结点左边界较小
                if(y2 < x1) { // 插入到头部，结束
                    res.push(newInterval,...intervals.slice(i))
                    break
                } else if(y2 <= y1) { // 与第i个元素融合，结束
                    res.push([x2,y1],...intervals.slice(i+1))
                    break
                } else { // x2 较小，开始插入
                    if(i < intervals.length - 1) {
                        tmpX = x2
                        start = 1
                    } else { // 没有下一个元素了，直接结束
                        res.push([x2,y2])
                    }
                }
            }
        } else { // 开始插入，不看x2了，用y2跟x1，y1比较最终找到右边界
            if(y2 > y1) { // 右边界超过了，下一个
                if(i < intervals.length - 1) {
                    continue
                } else {
                    res.push([tmpX, y2])
                    break
                }
            }
            if(y2 < x1) { // 找到右边界，结束
                res.push([tmpX,y2])
                res.push(...intervals.slice(i))
            } else { // 这里 y2 肯定是 <= y1 了
                res.push([tmpX,y1])
                res.push(...intervals.slice(i+1)) // 与当前元素融合了，所以是i+1
            }
            break
        }
    }
    return res
};