var abc = new (require('./sample3'))
console.log(abc)

var options = [
    { name: '닭고기', unit: '마리' },
    { name: '돼지고기', unit: 'kg' },
]

function meatCreate(...nums) {
    let ret = {}
    for (let i in nums) {
        ret[options[i].name] = nums[i];
    }
    checkUpdate(ret)
    return ret;
}
function checkUpdate(a) {
    if (Object.keys(a).length < options.length) {
        for (let i = Object.keys(a).length; i < options.length; ++i) {
            a[options[i].name] = 0;
        }
    }
    return a
}

var a = meatCreate(3)
var b = meatCreate(3, 2)
options.push({ name: '소고기', unit: 'g' });
var c = meatCreate(1, 6, 4)

var meatsTable = {
    1134: {
        id: 1134,
        contents: checkUpdate(a)
    },
    1735: {
        id: 1735,
        contents: checkUpdate(b)
    },
    1925: {
        id: 1925,
        contents: checkUpdate(c)
    }
}

console.log(meatsTable)
console.log(options)