/**
 * https://leetcode-cn.com/problems/iterator-for-combination/
 * 字母组合迭代器
 * Medium
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.rootVal = {
        val: null,
        next: null
    }
    let node = this.rootVal
    let arr = []
    function func(tmp,pos) {
        if(tmp.length === combinationLength) {
            arr.push(tmp)
            return
        }
        
        for(let i=pos;i<characters.length;i++) {
            tmp = tmp.concat(characters[i])
            func(tmp,i+1)
            tmp = tmp.substring(0,tmp.length-1)
        }
    }
    func('',0)
    for(let e of arr) {
        node.next = {
            val: e,
            next: null
        }
        node = node.next
    }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    this.rootVal = this.rootVal.next
    return this.rootVal.val
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.rootVal.next !== null
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */