/**
 * https://leetcode-cn.com/problems/words-frequency-lcci/
 * 面试题 16.02. 单词频率
 * Medium
 * @param {string[]} book
 */
var WordsFrequency = function(book) {
    this.map = {}
    for(let s of book) {
        this.map[s] = ~~this.map[s] + 1
    }
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
    return this.map[word] || 0
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */