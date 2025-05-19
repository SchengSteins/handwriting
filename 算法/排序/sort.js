let arr = [3,3,4,8,1,2,5,9,0]

// 冒泡
function bubble(array){
    for(let i = array.length - 1; i>0;i--){
        for(let j =0;j<i;j++){
            if(array[j] > array[j+1]) [array[j],array[j+1]] = [array[j+1],array[j]] 
        }
    }
    return array
}

//插排
function insertion(array){
    for(let i = 1; i< array.length ; i++){
        for(let j = i-1;j>=0 && array[j] > array[j+1];j--){
            [array[j],array[j+1]] = [array[j+1],array[j]] 
        }
    }
    return array
}

//选排
function selection(array){
    for(let i =0; i< array.length ; i++){
        let min = i
        for(let j = i+1; j< array.length;j++){
            min = array[min] > array[j] ? j : min
        }
        [array[i],array[min]] = [array[min],array[i]]
    }
    return array
}

//归并
function mergeSort(arr) {
   if(arr.length < 2) return arr
   const mid = Math.floor(arr.length/2)
   const left = arr.slice(0,mid)
   const right = arr.slice(mid)

   const merge = (left,right) => {
        const res = []
        while(left.length > 0 && right.length > 0){
            if(left[0] < right[0]){
                res.push(left.shift())
            }else{
                res.push(right.shift())
            }
        }
        return res.concat(left,right)
   }
   return merge(mergeSort(left),mergeSort(right))
}


function quickSort(arr) {
    if(arr.length < 2) return arr
    let mid = arr[0]
    let left = []
    let right = []
    for(let i = 1; i<arr.length;i++){
        if(arr[i] < mid){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(mid,quickSort(right))
}
console.log(mergeSort(arr))
