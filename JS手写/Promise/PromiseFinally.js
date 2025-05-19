Promise.prototype.MyFinally = function (callback) {
    //finally中回调无论如何都会调用，因此then分别传入resolve和reject回调
    return this.then(
        value => {
            Promise.resolve(callback()).then(() => value)
        },
        err => {
            Promise.resolve(callback()).then(() => { throw err })
        })
}
