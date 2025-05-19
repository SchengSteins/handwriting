for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}

//使用let
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}

//使用立即执行函数
for (var i = 0; i < 5; i++) {
    ; ((i) => {
        setTimeout(() => {
            console.log(i)
        }, 0)
    })(i)
}

//使用第三个参数
for (var i = 0; i < 5; i++) {
    setTimeout((i) => {
        console.log(i)
    }, 0, i)
}