let arr = [{
    "goodsId": "1",
    "quota": 12,
    "skuId": "1"
},
{
    "goodsId": "2",
    "quota": 12,
    "skuId": "2"
},
{
    "goodsId": "1",
    "quota": 12,
    "skuId": "1"
}]

//filter + map
function uniqueFunc(arr, uniId) {
    const res = new Map();
    return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}

//reduce
function uniqueFunc2(arr, uniId) {
    let hash = {}
    return arr.reduce((accum, item) => {
        hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)
        return accum
    }, [])
}

//for循环
function uniqueFunc3(arr, uniId) {
    let obj = {}
    let tempArr = []
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i][uniId]]) {
            tempArr.push(arr[i])
            obj[arr[i][uniId]] = true
        }
    }
    return tempArr
}

console.log(uniqueFunc(arr, 'skuId'));