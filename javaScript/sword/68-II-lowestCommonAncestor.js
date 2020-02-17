/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * 面试题68 - II. 二叉树的最近公共祖先
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    let m = new Map()
    let r = new Map()
    function dfs(node,a) {
        if(!node) return
        m.set(node,a)
        dfs(node.left,node)
        dfs(node.right,node)
    }
    dfs(root,root)
    r.set(p,1)
    while(p !== m.get(p)) {
        r.set(m.get(p),1)
        p = m.get(p)
    }
    while(!r.get(q)) {
        q = m.get(q)
    }
    return q
    // 更好的解法
    // if(!root) return null
    // if(root === p || root === q) return root
    // let left = lowestCommonAncestor(root.left,p,q)
    // let right = lowestCommonAncestor(root.right,p,q)
    // if(left && right) return root
    // if(left) return left
    // if(right) return right
    // return null
};