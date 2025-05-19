function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            min = arr[min] > arr[j] ? j : min
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
}