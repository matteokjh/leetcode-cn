/**
 * https://leetcode-cn.com/problems/path-sum-iii/
 * 路径总和 III
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    function func(root,arr,depth) {
        if(!root) {
            return 0
        }
        let val = root.val
        let count = sum === val ? 1 : 0
        let s = val
        for(let i = depth - 1;i>=0;i--) {
            s += arr[i]
            if(s === sum) {
                count++
            }
        }
        arr[depth] = val
        let a = func(root.left,arr,depth+1)
        let b = func(root.right,arr,depth+1)
        return count + a + b
    }
    return func(root,[],0)
};

// 用一个数组维护当前结点到根节点，每次递归都遍历一次