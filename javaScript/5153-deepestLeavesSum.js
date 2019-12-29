/**
 * https://leetcode-cn.com/problems/deepest-leaves-sum/
 * 层数最深叶子节点的和
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let maxDep = 0
    let arr = []
    function func(root,depth) {
        if(!root) return
        if(depth > maxDep) {
            arr = [root.val]
        } else if(depth === maxDep) {
            arr.push(root.val)
        }
        maxDep = Math.max(maxDep,depth)
        func(root.left,depth+1)
        func(root.right,depth+1)
    }
    func(root,0)
    return arr.reduce((acc,cur)=>acc+cur,0)
};