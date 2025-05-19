let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6]

//遍历
function unique(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) arr.splice(j, 1)
        }
    }
    return arr
}
//indexof
function unique2(arr) {
    let uniArr = []
    for (const num of arr) {
        if (uniArr.indexOf(num) === -1) uniArr.push(num)
    }
    return uniArr
}
//includes
function unique3(arr) {
    let uniArr = []
    for (const num of arr) {
        if (!uniArr.includes(num)) uniArr.push(num)
    }
    return uniArr
}
//set
function unique4(arr) {
    return [...new Set(arr)]
}
//hash
function unique5(arr) {
    let map = new Map()
    let uniArr = []
    for (const num of arr) {
        if (!map.has(num)) {
            map.set(num), true
            uniArr.push(num)
        }
    }
    return uniArr
}
//filter
function unique6(arr) {
    return arr.filter((num, index, arr) => {
        return arr.indexOf(num) === index
    })
}
console.log(unique6(arr));