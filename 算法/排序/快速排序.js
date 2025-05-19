function quickSort(arr) {
    if (arr.length < 2) return arr
    let left = [], right = []
    // let m = Math.floor(Math.random() * arr.length);
    // [arr[0], arr[m]] = [arr[m], arr[0]]
    let mid = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i] < mid ? left.push(arr[i]) : right.push(arr[i])
    }

    return quickSort(left).concat(mid, quickSort(right))
}

console.log(quickSort([3, 3, 4, 8, 1, 2, 5, 9, 0]));