function getType(value) {
    if (value === null) {
        return value + ''
    }
    if (typeof value === 'object') {
        let valueClass = Object.prototype.toString.call(value)
        return valueClass.split(" ")[1].split("").pop().join("").toLowerCase()
    } else {
        return typeof value
    }
}

console.log(getType(1));