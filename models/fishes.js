function Fish(id, anchovy, shrimp, clam, squid) {
    this.id = id;
    this.anchovy = anchovy;
    this.shrimp = shrimp;
    this.clam = clam;
    this.squid = squid;
}
Fish.prototype.toJSON = function () {
    return {
        id: this.id,
        '멸치': this.anchovy,
        '새우': this.shrimp,
        '조개': this.clam,
        '오징어': this.squid,
    }
}

module.exports = {
    kinds: [
        { name: '멸치', unit: '마리' },
        { name: '새우', unit: '마리' },
        { name: '조개', unit: 'g' },
        { name: '오징어', unit: '마리' },
    ],
    fishes: [
        new Fish('fish_115', 30, 0, 0, 0).toJSON(),
        new Fish('fish_116', 0, 10, 80, 20).toJSON(),
        new Fish('fish_117', 0, 3, 200, 0.5).toJSON(),
    ]
};
