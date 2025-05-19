Date.prototype.dateFormat = function (format) {
    let day = this.getDate()
    let month = this.getMonth() + 1
    let year = this.getFullYear()
    format = format.replace(/yyyy/, year)
    format = format.replace(/MM/, month)
    format = format.replace(/dd/, day)
    return format
}

console.log(new Date('2020-12-31').dateFormat('yyyy/MM/dd'));