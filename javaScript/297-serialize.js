/**
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 * 二叉树的序列化与反序列化
 * Hard
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = []
    function func(root,depth) {
        if(!res[depth]) {
            res[depth] = []
        }
        if(!root) {
            res[depth].push(null)
            return
        }
        res[depth].push(root.val)
        func(root.left,depth+1)
        func(root.right,depth+1)
    }
    func(root,0)
    res = res.slice(0,res.length-1).reduce((acc,cur)=>{
        if(Array.isArray(cur)) {
            return acc.concat(...cur)
        } else {
            return acc.concat(cur)
        }
    },[])
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data || !data.length) return null
    // 直接从1开始
    let j = 1
    let head = new TreeNode(data[0])
    let arr = [head]
    while(j < data.length) {
        let g = arr.length
        let ret = []
        while(g) {
            let node = arr.shift()
            let node1 = node
            let node2 = node
            if(data[j] !== null) {
                node1.left = new TreeNode(data[j])
                node1 = node1.left
                ret.push(node1)
            }
            if(data[j+1] !== null) {
                node2.right = new TreeNode(data[j+1])
                node2 = node2.right
                ret.push(node2)
            }
            g--
            j+=2
        }
        arr = ret
    }
    return head
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */