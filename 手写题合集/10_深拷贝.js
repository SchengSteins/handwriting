function deepClone(obj, map = new Map()) {
    if (typeof obj !== 'object') {
        return obj
    }
    //防止循环引用
    if (map.get(obj)) {
        return map.get(obj)
    }
    let newObj = Array.isArray(obj) ? [] : {}
    map.set(obj, newObj)
    for (const key of Object.keys(obj)) {
        newObj[key] = deepClone(obj[key], map)
    }

    return newObj
}