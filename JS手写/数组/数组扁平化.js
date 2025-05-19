//递归
let arr = [1, [2, [3, 4, 5]]]
function flatten(arr) {
    let res = []
    for (const num of arr) {
        if (Array.isArray(num)) {
            res = res.concat(flatten(num))
        } else {
            res.push(num)
        }
    }
    return res
}
//reduce
function flatten2(arr) {
    return arr.reduce((pre, cur) => {
        Array.isArray(cur) ? pre.concat(flatten2(cur)) : pre.push(cur)
    }, [])
}
//展开运算符
function flatten3(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
//split
function flatten4(arr) {
    return arr.toString().split(',').map(item => parseInt(item))
}
//ES6 flat
console.log(arr.flat(Infinity));