function debounce(fn, wait) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
}

function throttle(fn, delay) {
    let flag = true
    return function () {
        if (!flag) return;
        flag = false
        setTimeout(() => {
            fn.apply(this, arguments)
            flag = true
        }, delay)
    }
}