let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8, 10];

//交集
let intersection = arr1.filter(v => arr2.includes(v));
console.log(intersection); //[ 2, 4 ]

//差集
let difference = arr1.filter(v => !arr2.includes(v))
console.log(difference) //[ 1, 3, 5 ]

//并集
let union = arr1.concat(arr2.filter(v => !arr1.includes(v)))
console.log(union) //[ 1, 2, 3, 4, 5, 6, 8, 10 ]

//补集
let complementary = arr1.filter(v => !arr2.includes(v))
    .concat(arr2.filter(v => !arr1.includes(v)));
console.log(complementary); //[ 1, 3, 5, 6, 8, 10 ]


