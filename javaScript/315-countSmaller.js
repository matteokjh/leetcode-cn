/**
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
 * 计算右侧小于当前元素的个数
 * Hard
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    if(!nums || !nums.length) return []
    class BST_Node {
        constructor(val) {
            this.left = null
            this.right = null
            this.val = val
            this.count = 0
        }
    }
    function BST_Insert(node, newNode, tmp) {
        // 小，放左边，count++
        if(node.val >= newNode.val) {
            node.count++
            if(node.left) {
                return BST_Insert(node.left, newNode, tmp)
            } else {
                node.left = newNode
                return tmp
            }
        } else {
            // 大
            tmp += node.count + 1
            if(node.right) {
                return BST_Insert(node.right, newNode, tmp)
            } else {
                node.right = newNode
                return tmp
            }
        }
    }
    let count = [0]
    let node = new BST_Node(nums[nums.length-1])
    for(let i=nums.length - 2;i >= 0;i--) {
        let tmp = BST_Insert(node,new BST_Node(nums[i]), 0)
        count.push(tmp)
    }
    return count.reverse()
};