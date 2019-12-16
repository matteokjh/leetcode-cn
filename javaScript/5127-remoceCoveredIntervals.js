/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    if(!intervals || !intervals.length) return 0
    let count = 0
    let prev = []
    intervals.sort((a,b)=>{
        if(a[0] > b[0]) return 1
        else return -1
    })
    for(let i=1;i<intervals.length;) {
        if(intervals[i][1] <= intervals[i-1][1]){
            intervals.splice(i,1)
            count++
        } else {
            i++
        }
    }
    return intervals.length
};