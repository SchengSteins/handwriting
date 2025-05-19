//数组扁平化（多种方案）

//两数组交并补集




//输出判断(对象类型的引用类型特点，以及形参与实参)
let f = a => {
    //形参a指向实参a指向的对象，并修改了对象属性
    a.x = 1
    console.log(a.x);
    //形参a指向新的对象
    a = {
        x: 3
    }
    console.log(a.x);
}

var a = { x: 0 }
f(a)
//实参a指向的是原来的对象，且以及被修改了
console.log(a.x);


//undefine、undecleared、null的区别


//算法：两个字符串，是否能够通过交换一个（必须交换）字符串中的两个字符，得到另外一个字符串
var areAlmostEqual = function (s1, s2) {
    let diff = [], i = s1.length

    while (i--) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            diff.push([s1.charAt(i), s2.charAt(i)])
        }
    }
    return diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0] ||
        diff.length === 0 && new Set(s1.split('')).size !== s1.length
};

console.log(areAlmostEqual('abc', 'acb'));
console.log(areAlmostEqual('abb', 'abb'));
console.log(areAlmostEqual('abcd', 'abcd'));





//需要加深的
//项目的具体实现要弄清楚（token具体实现，node用到哪些中间件，前端用到哪些技术，cookie的实现和获取）
//最好不要提到自己不熟悉的模块
//编程习惯：vscode怎么调试，vue项目怎么调试，如何在浏览器开发者工具上调试