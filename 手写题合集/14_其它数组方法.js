//flat
Array.prototype.myFlat = function (depth) {
    let arr = this
    while (arr.some(item => Array.isArray(item)) && depth > 0) {
        arr = [].concat(...arr)
        depth--
    }
    return arr
}

//push
Array.prototype.myPush = function (...args) {
    for (const arg of args) {
        this[this.length] = arg
    }
    return this.length
}

//filter
Array.prototype.myFilter = function (fn) {
    if (typeof fn !== 'function') {
        throw Err0r('must be a function')
    }
    let res = []
    for (const num of this) {
        fn(num) && res.push(num)
    }
    return res
}

//map
Array.prototype.map = function (fn) {
    if (typeof fn !== 'function') {
        throw Err0r('must be a function')
    }
    let res = []
    for (const num of this) {
        res.push(fn(num))
    }
    return res
}