/**
 * https://leetcode-cn.com/problems/validate-binary-tree-nodes/
 * 5170. 验证二叉树
 * Medium
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let arr = leftChild.concat(...rightChild).filter(e => e !== -1)
    if(arr.some(e => e === 0)) return false
    let s = new Set(arr)
    return arr.length === s.size && s.size === n-1
};