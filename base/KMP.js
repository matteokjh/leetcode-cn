function build(pattern) {
    let n = pattern.length
    let next = new Array(n+1)
    for(let i=0, j = next[0] = -1; i < n; next[++i] = ++j) {
        while(~j && pattern[j] !== pattern[i]) j = next[j]
    }
    return next
}

function match(str, pattern) {
    let m = str.length
    let n = pattern.length
    let next = build(pattern)
    let res = []
    for(let i=0, j=0;i < m;i++) {
        while(j > 0 && str[i] !== pattern[j]) j = next[j]
        if(str[i] === pattern[j]) j++
        if(j === n) {
            res.push(i - n + 1)
            j = next[j]
        }
    }
    return res
}

function test() {
    console.log(match('abababab', 'aba'))
}

test()
