function gcd(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)
    while(1) {
        if(!b) return a
        a %= b
        if(!a) return b
        b %= a
    }
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a)
}

// console.log(gcd(-22374,-32116))
// console.log(gcd_rec(-22374,-32116))