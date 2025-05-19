Array.prototype.removeRepeatItem = function () {
    let len = this.length;
    let obj = {};
    for (let i = 0; i < len; i++) {
        if (!obj[this[i] + '*' + typeof this[i]]) {
            obj[this[i] + '*' + typeof this[i]] = this[i];
        }
    }
    let result = [];
    for (let key in obj) {
        result.push(obj[key]);
    }
    return result;
}
let myArr = [1, 1, 2, 1, '1', true, 'true', 2, 'abc', 'true', true, false, {}, {}, null, undefined, 'null', 'undefined'];
console.log(myArr.removeRepeatItem());
