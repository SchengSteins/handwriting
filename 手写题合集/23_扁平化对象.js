const obj = {
    nio: {
        xpev: {
            li: 1,
        },
        byd: 2,
    },
    tsla: 3,
};

function transform(obj) {
    let res = {}
    const dfs = (obj, str) => {
        if (typeof obj === 'number') {
            res[str.slice(0, -1)] = obj
            return
        }
        for (const key of Object.keys(obj)) {
            dfs(obj[key], str + key + '_')
        }
    }
    dfs(obj, '')
    return res
}

console.log(transform(obj));