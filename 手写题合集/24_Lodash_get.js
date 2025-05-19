/**
* object: 对象
* path: 输入的路径
* defaultVal: 默认值
**/
function get(object, path) {
    // 先将path处理成统一格式
    let newPath = [];
    if (Array.isArray(path)) {
        newPath = path;
    } else {
        // 先将字符串中的'['、']'去除替换为'.'，split分割成数组形式
        newPath = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    }

    // 递归处理，返回最后结果
    return newPath.reduce((o, k) => {
        return o[k]
    }, object);
}

var obj = {
    a: {
        b: 234
    },
    b: [
        {
            b1: 123,
            b2: 456
        },
        {
            b1: 123,
            b2: 456
        }
    ],
    c: [
        [
            {
                c1: 7890
            }
        ],
        [
            {
                c1: 123456
            }
        ]
    ]
}
console.log(get(obj, 'a.b'));//返回234
console.log(get(obj, 'b[1].b1'));//返回123
console.log(get(obj, 'c[0][0].c1'));//返回7890
console.log(get(obj, 'c[1][0].c1'));//返回123456
