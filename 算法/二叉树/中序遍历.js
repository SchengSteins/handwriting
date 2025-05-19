const root = require('../../BuildTree')
//递归
function inorderTraversal(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
//指针 + 栈模拟
function inorderTraversal2(root) {
    let res = []
    if (!root) return []
    let p = root
    const stack = []
    while (stack.length || p) {
        //左节点依次进栈，p指针用来找最左边的子节点
        while (p) {
            stack.push(p)
            p = p.left
        }
        const node = stack.pop()
        res.push(node.val)
        //如果节点有右节点，先用指针来遍历右节点
        p = node.right
    }
    return res
};

console.log(inorderTraversal2(root));