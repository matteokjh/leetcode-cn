// 树的遍历

// 中序遍历 - 递归
function inorder(root) {
    if(!root) return null
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}

// 中序遍历 - 非递归
function inorder2(root) {
    let stack = []
    let res = []
    let node = root
    while(node || stack.length) {
        if(node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            res.push(node.val)
            node = node.right
        }
    }
    return res
}

// 前序遍历 - 递归
function preorder(root) {
    if(!root) return null
    console.log(root.val)
    inorder(root.left)
    inorder(root.right)
}

// 前序遍历 - 非递归
function preorder2(root) {
    let res = []
    let stack = [root]
    while(stack.length) {
        let node = stack.pop()
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
        res.push(node.val)
    }
    return res
}

// 后序遍历 - 递归
function postorder(root) {
    if(!root) return null
    inorder(root.left)
    inorder(root.right)
    console.log(root.val)
}

// 后序遍历 - 非递归
function postorder2(root) {
    let stack = [root]
    let res = []
    while(stack.length) {
        let node = stack.pop()
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
        res.unshift(node.val)
    }
    return res
}