const root = require('../../BuildTree')
//递归
function preorderTraversal(root) {
    if (!root) return []
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};
//栈模拟
function preorderTraversal2(root) {
    let res = []
    if (!root) return []
    const stack = [root]
    while (stack.length) {
        let node = stack.pop()
        res.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return res
}

console.log(preorderTraversal2(root));