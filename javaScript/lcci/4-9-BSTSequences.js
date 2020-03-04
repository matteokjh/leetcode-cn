/**
 * https://leetcode-cn.com/problems/bst-sequences-lcci/
 * 面试题 04.09. 二叉搜索树序列
 * Hard
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var BSTSequences = function(root) {
    if(!root) {
        return [[]]
    }
    let res = []
    function func(root, queue, path) {
        if(root.left) queue.push(root.left)
        if(root.right) queue.push(root.right)
        if(!queue.length) {
            res.push(path)
        }
        let len = queue.length
        for(let i=0;i<len;i++) {
            let cur = queue[i]
            func(cur, queue.slice(0,i).concat(queue.slice(i+1)), path.concat(cur.val))
        }
    }
    func(root, [], [root.val])
    return res
};