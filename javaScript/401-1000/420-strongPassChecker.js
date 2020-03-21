/**
 * https://leetcode-cn.com/problems/strong-password-checker/
 * 420. 强密码检验器
 * Hard
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function (s) {
    const code0 = 48, code9 = 57, codea = 97, codez = 122, codeA = 65, codeZ = 90
    function isLowerCase(c) {
        let code = c.charCodeAt()
        return code >= codea && code <= codez
    }
    function isUpperCase(c) {
        let code = c.charCodeAt()
        return code >= codeA && code <= codeZ
    }
    function isDigit(c) {
        let code = c.charCodeAt()
        return code >= code0 && code <= code9
    }
    let len = s.length
    let res = 0, one = 0, two = 0
    let hasNum = 1, hasLowerCase = 1, hasUpperCase = 1
    let missing = 0, tmp = 0, cnt = 0
    for(let i=0;i<len;i++) {
        if(isDigit(s[i])) hasNum = 0
        if(isLowerCase(s[i])) hasLowerCase = 0
        if(isUpperCase(s[i])) hasUpperCase = 0
    }
    missing = hasNum + hasLowerCase + hasUpperCase
    for(let i=2;i<len;i++) {
        if(s[i] === s[i-1] && s[i] === s[i-2]) {
            long = 3
            while(i + 1 < len && s[i] === s[i+1]) {
                long++
                i++
            }
            if(long % 3 === 0) {
                one++
            } else if(long % 3 === 1) {
                two++
            }
            tmp += ~~(long / 3)
        }
    }
    
    if(len < 6) {
        return Math.max(6 - len, missing)
    } else if(len <= 20) {
        return Math.max(tmp, missing)
    } else {
        cnt = len - 20
        tmp -= Math.min(cnt, one)
        if(cnt > one) {
            tmp -= Math.min((cnt - one) / 2, two)
        }
        if(cnt > one + two * 2) {
            tmp -= ~~((cnt - one - two * 2) / 3)
        }
        return cnt + Math.max(tmp, missing)
    }
};