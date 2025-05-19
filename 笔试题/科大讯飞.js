function test({ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, { x: x4, y: y4 }) {
    return Math.abs((x1 * y2 + x2 * y3 + x3 * y4 + x4 * y1) - (x1 * y4 + x2 * y1 + x3 * y2 + x4 * y3)) / 2
}
let p1 = { x: 0, y: 1 }
let p2 = { x: 1, y: 2 }
let p3 = { x: 2, y: 1 }
let p4 = { x: 1, y: 0 }
console.log(test(p1, p2, p3, p4))

function test2(str) {
    return str.split(' ').filter(item => item.indexOf('e') !== -1 || item.indexOf('E') !== -1).length
}

console.log(test2("Nice toE meet you"))