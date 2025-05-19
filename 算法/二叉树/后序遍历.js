const root = require('../../BuildTree')
//递归
function postorderTraversal(root) {
    if (!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
};

//栈模拟
function postorderTraversal2(root) {
    let res = []
    if (!root) return []
    const stack = [root]
    //前序遍历：根 左 右
    //后序遍历：左 右 根  
    //如果用用栈存储: 根 右 左  输出反转就和后序遍历一样
    const out_stack = []
    while (stack.length) {
        out_stack.push(node)
        let node = stack.pop()
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    while (out_stack.length) {
        res.push(out_stack.pop().val)
    }
    return res
};

console.log(postorderTraversal2(root));