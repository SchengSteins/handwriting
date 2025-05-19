let request = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`任务${url}完成`)
        }, 1000);
    }).then((res) => {
        console.log('进度：' + res);
    })
}
//Promise.race+异步
async function limitRequest(urls = [], limit = 2) {
    let pool = []
    for (let i = 0; i < urls.length; i++) {
        let url = urls[i]
        let task = request(url)
        task.then(() => {
            pool.splice(pool.indexOf(task), 1)
            console.log(`${url} 结束，当前并发数：${pool.length}`);
        })
        pool.push(task)
        if (pool.length === limit)
            await Promise.race(pool)
    }
}
//普通实现
function limitRequest2(urls = [], limit = 3) {
    return new Promise((resolve, reject) => {
        const len = urls.length
        let count = 0

        // 同时启动limit个任务
        while (limit > 0) {
            start()
            limit -= 1
        }

        function start() {
            const url = urls.shift() // 从数组中拿取第一个任务
            if (url) {
                request(url).then(() => {
                    if (count == len - 1) {
                        // 最后一个任务完成
                        resolve()
                    } else {
                        // 完成之后，启动下一个任务
                        count++
                        start()
                    }
                })
            }
        }

    })
}

// 测试
limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe'])