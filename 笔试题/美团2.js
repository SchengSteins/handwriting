//外卖骑手
function f(arr, n) {
    let count = 0;
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - count >= n) count += n;
        else ans++
    }
    return ans
}
console.log(f([5, 6, 7, 8, 9, 10], 5))

//翻转扑克
function recover( arr) {
    let res = []
    while (arr.length > 0) {
        let temp = arr.pop()
        res.unshift(temp)
        temp = res.pop()
        res.unshift(temp)
        temp = res.pop()
        res.unshift(temp)
    }
    return res
}

console.log(recover( [1, 2, 3, 4]))