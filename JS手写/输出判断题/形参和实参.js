f = a => {
    a.x = 1
    console.log(a);
    console.log(a.x)
    a = { x: 3 }
    console.log(a);
    console.log(a.x)
}
var a = { x: 0 };
f(a);
console.log(a);
console.log(a.x)