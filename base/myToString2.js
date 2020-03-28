// 转二进制字符串，支持负数
function myToString2(num) {
    if(num < 0) {
        let str = myToString2(-num-1)
        return str.split('').map(e=>e === '0' ? '1' : '0').join('')
    } else return (('0').repeat(32) + num.toString(2)).slice(-32)
}