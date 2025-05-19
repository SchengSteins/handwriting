const BaseConversion = (number, base) => {
    const arr = [];
    const string = "0123456789ABCDEF";
    let baseString = ``;

    if (base < 2 || base > 16) return baseString;

    while (number > 0) {
        arr.push(Math.floor(number % base));
        number = Math.floor(number / base);
    }

    while (arr.length != 0) baseString += string[arr.pop()];

    return baseString;
}
console.log(BaseConversion(10, 2));