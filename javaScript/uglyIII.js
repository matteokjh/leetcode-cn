/**
 * 
 * 丑数III Liouzhou 的解法
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    //     最大公约数
        function gcd(a,b) {
          if (!b) {
            return a;
          }
          return gcd(b, a % b);
        }
    //     最小公倍数
        function lcm(a,b) {
            return Math.floor(a * b / gcd(a,b))
        }
    //     计算丑数个数，丑数的本质是三数的公倍数
        function calc(m,ab,bc,ac,abc) {
            return Math.floor(m/a) + 
                Math.floor(m/b) +
                Math.floor(m/c) -
                Math.floor(m/ab) -
                Math.floor(m/ac) -
                Math.floor(m/bc) +
                Math.floor(m/abc)
        }
        let ab = lcm(a,b)
        let bc = lcm(b,c)
        let ac = lcm(a,c)
        let abc = lcm(ab,c)
        let L = 0
        let R = 2000000010
        let ret = R
    //     二分查找，取上下界中点计算丑数个数与n比较
        while(L <= R) {
            let m = Math.floor((L + R) / 2)
            if(calc(m,ab,bc,ac,abc) < n) {
                ret = m
                L = m + 1
            } else {
                R = m - 1
            }
        }
        return ret + 1
        
    };