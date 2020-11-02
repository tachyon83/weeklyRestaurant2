module.exports = class T {
    constructor() {
        this.a = new (require('./sample2'))
        console.log(this.a)
        this.b = new (require('./folder/sample4'))
    }
}