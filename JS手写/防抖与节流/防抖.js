// 将多次高频操作优化为只在最后一次执行
function debounce(fn) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    //函数柯里化
    return function (...args) {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            fn.apply(this, args);
        }, 500);
    };
}
function sayHi() {
    console.log('防抖成功');
}
var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖