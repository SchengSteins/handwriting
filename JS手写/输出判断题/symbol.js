// example 1
var a={}, b='123', c=123;  
a[b]='b'; //a[symbol123] = 'b'
a[c]='c'; // a[symbol123] = 'c'
console.log(a[b]); // a[symbol123] = 'c'


// example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b'; //a[symbol b] = 'b'
a[c]='c';  // a[symbol c] = 'c' 
console.log(a[b]); //a[symbol b] = 'b'


// example 3
var a={}, b={key:'123'}, c={key:'456'};  
a[b]='b'; //a[symbol [object Object]] = 'b'
a[c]='c';  //a[symbol [object Object]] = 'c'
console.log(a[b]); //a[symbol [object Object]] = 'c'