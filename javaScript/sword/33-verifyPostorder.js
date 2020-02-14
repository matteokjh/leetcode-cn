/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 * 面试题33. 二叉搜索树的后序遍历序列
 * Medium
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if(!postorder || postorder.length < 2) return true
    let mid = 0
    let root = postorder[postorder.length-1]
    for(let i=0;i<postorder.length-1 && postorder[i] < root;i++) {
        mid++
    }
    for(let i=mid+1;i<postorder.length-1;i++) {
        if(postorder[i] < root) return false
    }
    return verifyPostorder(postorder.slice(0,mid)) && verifyPostorder(postorder.slice(mid+1,postorder.length - 1))
};