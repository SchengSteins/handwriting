let arr = [[2, 5], [2, 1], [4, 2], [2, 3]]
let str = ['c', 'a', 'b', 'b', 'd']

class Node {
    constructor(val) {
        this.val = val
        this.link = []
        this.set = new Set()
    }
    append(node) {
        this.link.push(node)
    }
}
let nodes = []
for (let i = 1; i <= str.length; i++) {
    nodes[i] = new Node(str[i - 1])
}
for (const link of arr) {
    nodes[link[0]].append(nodes[link[1]])
    nodes[link[1]].append(nodes[link[0]])
}
const dfs = (node, path) => {
    path.push(node)
    let child = node.link.filter(item => !path.includes(item))
    for (const node of child) {
        path.forEach(item => item.set.add(node.val))
        dfs(node, path)
    }
    path.pop()
}
dfs(nodes[1], [])
let res = 0
for (let i = 1; i <= arr.length; i++) {
    res += nodes[i].set.size;
}
console.log(res);