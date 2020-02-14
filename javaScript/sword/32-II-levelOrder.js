/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 * 面试题32 - II. 从上到下打印二叉树 II
 * Easy
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
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    let depth = 0
    while(queue.length) {
        let len = queue.length
        for(let i=0;i<len;i++) {
            let node = queue.shift()
            if(!node) continue
            if(!res[depth]) res[depth] = []
            res[depth].push(node.val)
            queue.push(node.left,node.right)
        }
        depth++
    }
    return res
};