/**
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * BST找最近公共组先
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
    let a = [],b=[];
    function func(root,a,b){
        if(root.val == a.val){
            b.push(root)
            return b
        }else{
            b.push(root)
            if(root.val > a.val){
                return func(root.left,a,b)
            }else {
                return func(root.right,a,b)
            }
        }
    }
    a = func(root,p,[]);
    b = func(root,q,[]);
    let res;
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i].val == b[j].val){
                res = a[i]
            }
        }
    }
    return res

    // 评论方法：利用二叉搜索树的特性
    // function func(root){
    //     if(root.val > p.val && root.val > q.val){
    //         return func(root.left)
    //     }else if(root.val < p.val && root.val < q.val){
    //         return func(root.right)
    //     }else{
    //         return root
    //     }
    // }
    // return func(root);
};