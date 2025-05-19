const root = require('../../BuildTree')
//队列模拟 
function levelOrder(root) {
    let res = [];
    if (!root) return res;
    const stack = [root];
    while (stack.length !== 0) {
        const node = stack.shift();
        res.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return res;
};

function levelOrder2(root) {
    let res = [];
    if (!root) return res;

    const stack = [root];
    while (stack.length !== 0) {
        const levelsize = stack.length;
        res.push([]);
        for (let i = 1; i <= levelsize; i++) {
            const node = stack.shift();
            res[res.length - 1].push(node.val);
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
    }
    return res;
};

console.log(levelOrder(root));
console.log(levelOrder2(root));