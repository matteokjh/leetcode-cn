/**
 * https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 * 根据身高重建队列
 * Medium
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // tricky way
    // let res = new Array(people.length)
    // people.sort((a,b)=>{
    //     if(a[0] > b[0]) {
    //         return 1
    //     } else if(a[0] === b[0]) {
    //         return a[1] < b[1] ? 1 : -1
    //     } else return -1
    // })
    // let arr = people.map((e,idx)=>idx)
    // people.forEach(e=>{
    //     res[arr[e[1]]] = e
    //     arr.splice(e[1],1)
    // })
    // return res
    let res = new Array(people.length)
    people.sort((a,b)=>{
        if(a[0] > b[0]) {
            return 1
        } else if(a[0] === b[0]) {
            return a[1] > b[1] ? 1 : -1
        } else return -1
    })
    people.forEach(e=>{
        let i=0
        let count = 0
        while(i<people.length) {
            if(res[i]) {
                if(res[i][0] >= e[0]) count++
            } else {
                if(count === e[1]) {
                    res[i] = e
                    break
                }
                count++
            }
            i++
        }
    })
    return res
};