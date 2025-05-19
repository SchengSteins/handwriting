Array.prototype.myReduce = function (callback, accumulator) {
    //accumulator 蓄能器(传入的是初始值)
    let arr = Object(this)
    let i = 0
    // 判断是否传入初始值
    if (accumulator === undefined) {
        // 没有初始值的空数组调用reduce会报错
        if (arr.length === 0) {
            throw new Error('initVal and Array.length>0 need one')
        }
        // 初始值赋值为数组第一个元素
        accumulator = arr[i];
        i++;
    }
    for (; i < arr.length; i++) {
        // 计算结果赋值给初始值
        //callback可接收4个参数
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator;
}

let arr = [1, 2, 3, 4]
console.log(
    arr.myReduce(
        (acc, cur) => {
            return acc += cur
        }, 10
    )
);