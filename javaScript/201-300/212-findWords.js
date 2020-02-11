/**
 * https://leetcode-cn.com/problems/word-search-ii/
 * 单词搜索 II
 * Hard
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let row = board.length
    let col = board[0].length
    if(!row) return []
    let res = []
    // 构建前缀树
    function createTrie(arr) {
        this.root = {}
        let node = this.root
        arr.forEach(word=>{
            word.split('').forEach(letter=>{
                if(!Object.keys(node).some(e=>e === letter)) {
                    node[letter] = {}
                }
                node = node[letter]
            })
            node['word_end'] = true
            node = this.root
        })
    }
    let Trie = new createTrie(words)
    // dfs
    function dfs(i,j,temp,node) {
        if(i >= row || j >= col || i < 0 || j < 0 || board[i][j] === '#') {
            return
        }
        let letter = board[i][j]
        // 不存在则直接回溯
        if(node[letter] === undefined) {
            return
        }
        temp += letter
        node = node[letter]
        if(node['word_end']) {
            res.push(temp)
            node['word_end'] = false
        }
        board[i][j] = '#' // 搜索完毕
        dfs(i+1,j,temp,node)
        dfs(i,j+1,temp,node)
        dfs(i,j-1,temp,node)
        dfs(i-1,j,temp,node)
        board[i][j] = letter
    }
    // 遍历 dfs
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            dfs(i,j,'',Trie.root)
        }
    }
    return res
};