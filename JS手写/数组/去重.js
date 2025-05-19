//两次遍历 + splice
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                // 删除后注意回调j
                j--;
            }
        }
    }
    return arr;
}

//indexOf
function unique2(arr) {
    let uniArr = []
    for (let i = 0; i < arr.length; i++) {
        if (uniArr.indexOf(arr[i]) === -1) {
            uniArr.push(arr[i])
        }
    }
    return uniArr
}

//includes
function unique3(arr) {
    let uniArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!uniArr.includes(arr[i])) {
            uniArr.push(arr[i])
        }
    }
    return uniArr
}

//使用set
function unique4(arr) {
    let set = new Set(arr)
    return [...set]
}

//sort加快慢指针
function unique5(arr) {
    arr.sort((a, b) => a - b)
    let slow = 1, fast = 1
    while (fast < arr.length) {
        if (arr[fast] != arr[fast - 1]) {
            arr[slow++] = arr[fast];
        }
        ++fast;
    }
    arr.length = slow;
    return arr;
}

//map模拟hash
function unique6(arr) {
    let map = new Map()
    let uniArr = []
    for(let i = 0;i<arr.length;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],true)
            uniArr.push(arr[i])
        }
    }
    return uniArr
}

//filter + indexOf
function unique7(arr) {
    return arr.filter( (item,index,arr) => {
        //indexOf返回第一个满足条件的索引值
        return arr.indexOf(item) === index
    })
}

//reduce + includes
function unique8(arr){
    //reduce: 参数一：初始值，上一次返回值 参数二：当前值
    let uniArr = arr.reduce((acc,cur) => {
        if(!acc.includes(cur)){
            acc.push(cur)
        }
        return acc
    },[])
    return uniArr
}


let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6]
console.log(unique7(arr));