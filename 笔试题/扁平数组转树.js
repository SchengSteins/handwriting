let list= [
    { id: '1', parentId: '', name: '1' },
    { id: '2', parentId: '', name: '2' },
    { id: '3', parentId: '1', name: '3' },
    { id: '4', parentId: '3', name: '4' },
    { id: '5', parentId: '2', name: '5' },
    { id: '6', parentId: '5', name: '6' },
    { id: '7', parentId: '6', name: '7' },
]

// 首先对数据深拷贝一份数据，因为下面的处理会影响原数组
let curList = JSON.parse(JSON.stringify(list))
let newList = []
for (let i = 0; i < curList.length; i++) {
    if (!curList[i].parentId) {
        curList[i].child = []
        newList.push(curList[i])
        curList.splice(i, 1)  // 筛选后做删除
        i--
    }
}


function travChild(curList, newList) {
    for (let i = 0; i < curList.length; i++) {
        for (let j = 0; j < newList.length; j++) {
            if (curList[i].parentId === newList[j].id) {
                curList[i].child = []
                newList[j].child.push(curList[i])
                curList.splice(i, 1)
            }
        }
    }
    // 第三步，找出第三节点，加到第二节点
    let twinNode = treeEndNode(newList)  // 获取第二节点
    if (curList.length) {
        travChild(curList, twinNode)
    }
    // 第n步，回调第三的步骤
}

function treeEndNode(tree, twinList = []) {
    tree.map(item => {
        if (item.child.length) {
            treeEndNode(item.child, twinList)
        } else {
            twinList.push(item)
        }
    })
    return twinList
}

travChild(curList, newList)