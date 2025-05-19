console.log(1);
setTimeout(() => {
    console.log(2);
})
new Promise((resolve, reject) => {
    console.log(3);
    resolve()
    console.log(4);
}).then(() => {
    console.log(5);
})
new Promise((resolve, reject) => {
    resolve()
    console.log(6);
}).then(() => {
    console.log(7);
})
console.log(8);