/**
 * 前缀树 Tree
**/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for(let w of word) {
        if(!node[w]) node[w] = new Trie()
        node = node[w]
    }
    node['word_end'] = 1
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    let state = true
    for(let w of word) {
        if(!node[w]) {
            state = false
            break
        }
        node = node[w]
    }
    if(node['word_end'] && state) return true
    else return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root
    let res = true
    for(let w of prefix) {
        if(!node[w]) {
            res = false
            break
        }
        node = node[w]
    }
    return res
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */