let PENDING = 'pending'
let RESOLVED = 'resolved'
let REJECTED = 'reject'

function MyPromise(fn) {
    this.state = PENDING
    this.value = null
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []

    const resolve = (value) => {
        if (this.state === pending) {
            this.state = RESOLVED
            this.value = value
            this.resolvedCallbacks.forEach(cb => cb(this.value))
        }
    }
    const reject = (value) => {
        if (this.state === pending) {
            this.state = REJECTED
            this.value = value
            this.rejectedCallbacks.forEach(cb => cb(this.value))
        }
    }

    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

MyPromise.prototype.myThen = function (onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : v => { throw v }

    if (this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved)
        this.rejectedCallbacks.push(onRejected)
    }
    if (this.state === RESOLVED) {
        onResolved(this.value)
    }
    if (this.state === RESOLVED) {
        onRejected(this.value)
    }
}


Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError('must be an array')
        }
        let arr = []
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                arr[index] = res
                if (Object.keys(arr).length === promises.length) resolve(arr)
            }).catch(
                reject
            )
        })
    })
}


Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise).then(resolve, reject)
        }
    })
}