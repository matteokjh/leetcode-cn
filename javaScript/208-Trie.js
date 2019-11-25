/**
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/
 * 实现 Trie 前缀树
 * Medium
 * Initialize your data structure here.
 */
var Trie = function() {
    this.next = new Array(26)
    this.isEnd = false
    this.searchTrie = (word) => {
        let root = this
        // console.log(root, word)
        for(let i=0;i<word.length;i++) {
            let idx = this.getASCII(word[i]) - this.getASCII('a')
            if(!root.next[idx]) {
                return false
            }
            root = root.next[idx]
        }
        return root.isEnd ? 'end' : true
    }
    this.getASCII = (charater) => {
        return charater.charCodeAt(0)
    }
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this
    for(let i=0;i<word.length;i++) {
        let idx = this.getASCII(word[i]) - this.getASCII('a')
        if(!root.next[idx]) {
            root.next[idx] = new Trie()
        }
        root = root.next[idx]
    }
    root.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.searchTrie(word) === 'end'
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchTrie(prefix)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */