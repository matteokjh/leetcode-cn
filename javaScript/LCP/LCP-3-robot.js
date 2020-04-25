/**
 * https://leetcode-cn.com/problems/programmable-robot/
 * LCP 03. 机器人大冒险
 * Medium
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function (command, obstacles, x, y) {
    let sx = sy = 0
    for (let ch of command) {
        switch (ch) {
            case 'U': sy++; break
            case 'R': sx++
        }
    }
    if (reach(sx, sy, x, y)) {
        for (let [px, py] of obstacles) {
            if (px > x || py > y) continue
            if (reach(sx, sy, px, py)) return false
        }
        return true
    } else return false

    // sx, sy 能否到达 x, y
    function reach(sx, sy, x, y) {
        let s = ~~((x + y) / (sx + sy))
        let [px, py] = [s * sx, s * sy]
        let step = (x + y) % (sx + sy)
        if (step) {
            for (let i=0;i<step;i++) {
                switch (command[i]) {
                    case 'U': py++; break
                    case 'R': px++
                }
            }
        }
        return px === x && py === y
    }
};