Promise.MyAll = function (promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)){
            throw new TypeError("promises must be an array")
        }
        let arr = []
        promises.forEach((promise, i) => {
            //这里用resolve将非pormise值封装成promise（已经reject的promise无法改变状态）
            Promise.resolve(promise).then(res => {
                //收集promise.resolve结果
                arr[i] = res
                //这里数组判断不能用length，因为当最后一个promise最先完成时，
                //数组会直接变为[ <n-1 empty items>, res ]，length为n。
                //且此处调用resolve为最外层promise传入的resolve
                if (Object.keys(arr).length === promises.length) resolve(arr)
            }).catch(
                //当有一个promise围殴reject时，最外层promise也reject;
                //这里只写了reject相当于 执行回调 (err) => reject(err) 
                reject
            )
        })
    })
}