// https://leetcode-cn.com/problems/tweet-counts-per-frequency/comments/
// 推文计数
// Medium

var TweetCounts = function() {
    this.rec = {}
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if(!this.rec[tweetName]) this.rec[tweetName] = []
    this.rec[tweetName].push(time)
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
    let arr = [...this.rec[tweetName].sort((a,b)=>a-b)]
    let res = []
    let gap = 0
    switch(freq) {
        case 'minute': gap = 60;break
        case 'hour': gap = 3600;break
        case 'day': gap = 3600 * 24;break
    }
    for(let i=startTime;i<=endTime;i+=gap) {
        let count = 0
        let end = i + gap > endTime ? endTime+1 : i + gap
        for(let j=0;j<arr.length;j++) {
            if(arr[j] < i) continue
            if(arr[j] >= end) break
            count++
        }
        res.push(count)
    }
    return res
};

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */