//repeat
function repeat(str, n) {
    return new Array(n + 1).join(str)
}
function repeat2(str, n) {
    //递归
    return n > 0 ? str.concat(repeat(s, --n)) : ""
}


//reverse
String.prototype._reverse = function (a) {
    return a.split("")._reverse().join("")
}


