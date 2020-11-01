function a(id, num, width) {
    let ret = {}
    for (let argument of arguments) {
        ret[argument] = argument
    }
    return ret;
}
// a.prototype.toJson = () => {
//     let ret = {};
//     for (let key of Object.keys(this)) {
//         ret[key] = this[key]
//     }
//     return ret;
// }

b = a("id" = 12, "num" = 5, "width" = 16);
b.height = 3
console.log(b)
