//拉了拉了拉了
// 38道选择题
//vue defineProperty手写
//vue diff算法
//vue 路由的两种模式
//vue diff算法 （如何遍历）
//事件循环  Promise判断
//生成合法括号

let a1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise3')
        console.log('timer');
    })
    resolve('promise1')
    resolve('promise2')
}).then((res) => {
    console.log(res);
}).finally((res) => {
    console.log(res);
    setTimeout(() => {
        console.log('finally', a1);
    })
})

// 生成括号
function test(n) {
    let res = []
    const dfs = (left, right, str) => {
        if (left > right || left < 0) return
        if (left == 0 && right == 0) res.push(str)
        dfs(left - 1, right, str + '(')
        dfs(left, right - 1, str + ')')
    }
    dfs(n, n, '')
    return res
}

console.log(test(3));