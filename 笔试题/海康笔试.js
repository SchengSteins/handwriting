//实现数组去重，多种方法
//描述事件循环

//实现扁平数组转对象
let input = [
    { pid: 0, id: 1, name: "中国" },
    { pid: 1, id: 2, name: "广东" },
    { pid: 2, id: 3, name: "深圳" },
    { pid: 3, id: 6, name: "福田" },
    { pid: 1, id: 4, name: "香港" },
    { pid: 4, id: 5, name: "九龙" },
];

let parser = (arr) => {
    let map = {};
    let output = [];
    arr.forEach((item) => {
        map[item.id] = item;
    });
    arr.forEach((item) => {
        if (!map[item.pid]) {
            output.push(item);
        } else {
            map[item.pid].children
                ? map[item.pid].children.push(item)
                : (map[item.pid].children = [item]);
        }
        // Reflect.deleteProperty(item, 'pid');
    });
    return output;
};
console.log(parser(input));

//实现十进制转2-16进制
const BaseConversion = (number, base) => {
    const arr = [];
    const string = "0123456789ABCDEF";
    let baseString = '';

    if (base < 2 || base > 16) return baseString;

    while (number > 0) {
        arr.push(Math.floor(number % base));
        number = Math.floor(number / base);
    }

    while (arr.length != 0) baseString += string[arr.pop()];

    return baseString;
}
console.log(BaseConversion(10, 2));