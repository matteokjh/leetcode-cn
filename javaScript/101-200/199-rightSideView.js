/**
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * 199. 二叉树的右视图
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    while(queue.length) {
        let len = queue.length
        res.push(queue[len-1].val)
        for(let i=0;i<len;i++) {
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return res
};