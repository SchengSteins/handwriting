Array.prototype.myForEach = function (callback, thisValue) {
    if (callback === null || callback === undefined) {
        throw new TypeError("Cannot read property 'myForEach' of null")
    }
    if (typeof callback != 'function') {
        throw new TypeError(callback + "is not a function")
    }
    let arr = Object(this)
    for (let i = 0; i < arr.length; i++) {
        callback.call(thisValue, arr[i], i, arr)
    }
}

let arr = [1, 2, 3]
arr.forEach((item, index, arr) => { arr[index] = item + 1 })
console.log(arr);