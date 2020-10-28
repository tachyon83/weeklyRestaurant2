function Fish(id, anchovy) {
    this.id = id;
    this.anchovy = anchovy;
}
Fish.prototype.toJSON = function () {
    return {
        id: this.id,
        '멸치': this.anchovy,
    }
}

module.exports = {
    kinds: [
        { name: '멸치', '단위': '마리' }
    ],
    fishes: [
    ]
};
