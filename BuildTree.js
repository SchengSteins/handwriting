let input = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function buildTree(arr) {
    let root = new TreeNode(arr[0])
    //一样是用队列
    let Nodes = [root]
    let i = 1
    for (let node of Nodes) {
        if (arr[i] !== null) Nodes.push(node.left = new TreeNode(arr[i]))
        i++
        if (i == arr.length) return root
        if (arr[i] !== null) Nodes.push(node.right = new TreeNode(arr[i]))
        i++
        if (i == arr.length) return root
    }
}

let root = buildTree(input);

module.exports = root