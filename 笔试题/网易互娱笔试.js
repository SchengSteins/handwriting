//问答题
//CSS隐藏元素的方法（5种以上）
//cookie localStorage sessionStorage的区别
//不使用原生方法如何获取DOM
//手写节流防抖

//编程题
//最长回文子串
//前中遍历 推后续遍历
function getPostOrderOfTree(preStr, midStr) {
    //write code here
    if (preStr.length <= 1 && midStr.length <= 1 && preStr == midStr) return preStr
    let root = preStr[0], rootIndex = midStr.indexOf(root)
    let leftMidStr = midStr.slice(0, rootIndex)
    let rightMideStr = midStr.slice(rootIndex + 1)
    let leftPreStr = preStr.slice(1, 1 + rootIndex)
    let rightPreStr = preStr.slice(1 + rootIndex)
    return getPostOrderOfTree(leftPreStr, leftMidStr) + getPostOrderOfTree(rightPreStr, rightMideStr) + root
}

console.log(getPostOrderOfTree("ACDEFHGB", "DECAHFBG"));