Function.prototype.myCall = function (context, ...args) {
    // if (typeof this !== 'function') {
    //     throw Error("this is not a function")
    // }
    context = context || window
    context.fn = this
    let res = context.fn(...args)
    delete context.fn
    return res
}

Function.prototype.myApply = function (context, args) {
    if (typeof this !== 'function') {
        throw Error("this is not a function")
    }
    let res = null
    context = context || window
    context.fn = this
    res = context.fn(...args)
    delete context.fn
    return res
}

Function.prototype.myBind = function (context, args) {
    if (typeof this !== 'function') {
        throw Error("this is not a function")
    }
    let fn = this
    return function F(...innerArg) {
        return fn.apply(
            this instanceof F ? this : context,
            [...args, ...innerArg]
        )
    }
}