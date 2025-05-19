function mergeSort(arr) {
    if (arr.length < 2) return arr
    let mid = arr.length >> 1
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    const merge = (arr1, arr2) => {
        let res = []
        while (arr1.length > 0 && arr2.length > 0) {
            arr1[0] < arr2[0] ? res.push(arr1.shift()) : res.push(arr2.shift())
        }
        return res.concat(arr1, arr2)
    }
    return merge(mergeSort(left), mergeSort(right))
}