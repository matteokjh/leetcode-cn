/**
 * https://leetcode-cn.com/problems/max-points-on-a-line/
 * 直线上最多的点数
 * Hard
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let max = 0
    let no_repeat = []
    let point_map = {}
    points.forEach(e => {
        if(point_map[e]) {
            point_map[e]++
        } else {
            no_repeat.push(e)
            point_map[e] = 1
        }
    })
    if(no_repeat.length === 1) {
        return point_map[no_repeat[0]]
    }
    for(let i=0;i<no_repeat.length;i++) {
        let [x1,y1] = [no_repeat[i][0],no_repeat[i][1]]
        let tmpMax = 0
        let tmpMap = {}
        for(let j=i+1;j<no_repeat.length;j++) {
            let [x2,y2] = [no_repeat[j][0],no_repeat[j][1]]
            let [dy,dx] = [y2-y1, x2-x1]
            let g = gcd(dy, dx)
            if(g) {
                dx = dx / g
                dy = dy / g
            }
            let k = `${dy}/${dx}`
            if(!tmpMap[k]) tmpMap[k] = 0
            tmpMap[k] += point_map[no_repeat[j]]
            tmpMax = Math.max(tmpMax, tmpMap[k])
        }
        max = Math.max(max, tmpMax+point_map[no_repeat[i]])
    }
    function gcd(x, y) {
        if(y === 0) return x
        return gcd(y, x % y)
    }
    return max
};