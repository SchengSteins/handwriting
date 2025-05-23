import observe from './observe.js'
import Watcher from './Watcher.js'

var obj = {
    a: {
        m: {
            n: 5
        }
    },
    b: 10,
    c: {
        d: {
            e: {
                f: 6666
            }
        }
    },
    g: [22, 33, 44, 55]
}

observe(obj)
new Watcher(obj, 'a.m.n', (val) => {
    console.log('111', val);
})
obj.a.m.n = 88
console.log(obj);