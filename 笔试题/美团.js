//礼品的包装
function test(a, b) {
    return Math.min(Math.min(a, b), (a + b) / 3)
}
console.log(test(44, 85));

//魔法石共鸣
function test2(n, arr1, arr2) {
    let map1 = {}
    for (const num of arr1) {
        map1[num] ? map1[num]++ : map1[num] = 1
        if (map1[num] > n / 2) return 0
    }
    let map2 = { ...map1 }
    for (let i = 0; i < n; i++) {
        let num = arr2[i]
        if (arr1[i] != num) map2[num] ? map2[num]++ : map2[num] = 1
    }
    let max = -Infinity, sig = -1
    for (const key of Object.keys(map2)) {
        if (map2[key] > max) {
            max = map2[key]
            sig = key
        }
    }
    return max < n / 2 ? -1 : Math.ceil(n / 2) - map1[sig]
}
let n = 5;
let arr1 = [1, 5, 5, 5, 5]
let arr2 = [10, 5, 5, 9, 10]
console.log(test2(n, arr1, arr2));