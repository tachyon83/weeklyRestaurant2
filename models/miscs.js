function Misc(id, potato, onion, carrot, mushroom, greenonion, garlic, noodle, guksu, cychili, chili, squash, sesame, seaweed, rice, beansprouts, tofu, egg, cabbage, cucumber, bambooshoots, paprika, bokchoy, flour, milk) {
    this.id = id;
    this.potato = potato;
    this.onion = onion;
    this.carrot = carrot;
    this.mushroom = mushroom;
    this.greenonion = greenonion;
    this.garlic = garlic;
    this.noodle = noodle;
    this.guksu = guksu;
    this.cychili = cychili;
    this.chili = chili;
    this.squash = squash;
    this.sesame = sesame;
    this.seaweed = seaweed;
    this.rice = rice;
    this.beansprouts = beansprouts;
    this.tofu = tofu;
    this.egg = egg;
    this.cabbage = cabbage;
    this.cucumber = cucumber
    this.bambooshoots = bambooshoots;
    this.paprika = paprika;
    this.bokchoy = bokchoy;
    this.flour = flour;
    this.milk = milk;
}
Misc.prototype.toJSON = function () {
    return {
        id: this.id,
        '감자': this.potato,
        '양파': this.onion,
        '당근': this.carrot,
        '버섯': this.mushroom,
        '대파': this.greenonion,
        '마늘': this.garlic,
        '면': this.noodle,
        '국수': this.guksu,
        '청양고추': this.cychili,
        '고추': this.chili,
        '애호박': this.squash,
        '깨': this.sesame,
        '김': this.seaweed,
        '밥': this.rice,
        '콩나물': this.beansprouts,
        '두부': this.tofu,
        '달걀': this.egg,
        '양배추': this.cabbage,
        '오이': this.cucumber,
        '죽순': this.bambooshoots,
        '파프리카': this.paprika,
        '청경채': this.bokchoy,
        '빵(밀)가루': this.flour,
        '우유': this.milk,
    }
}

module.exports = {
    kinds: [
        { name: '감자', unit: '개' },
        { name: '양파', unit: '개' },
        { name: '당근', unit: '개' },
        { name: '버섯', unit: '개' },
        { name: '대파', unit: '단' },
        { name: '마늘', unit: '개' },
        { name: '면', unit: '인분' },
        { name: '국수', unit: '인분' },
        { name: '청양고추', unit: '개' },
        { name: '고추', unit: '개' },
        { name: '애호박', unit: '개' },
        { name: '참깨', unit: 'g' },
        { name: '김', unit: 'g' },
        { name: '밥', unit: 'g' },
        { name: '콩나물', unit: 'g' },
        { name: '두부', unit: 'g' },
        { name: '달걀', unit: '개' },
        { name: '양배추', unit: '개' },
        { name: '오이', unit: '개' },
        { name: '죽순', unit: '뿌리' },
        { name: '파프리카', unit: '개' },
        { name: '청경채', unit: '개' },
        { name: '빵가루', unit: 'g' },
        { name: '우유', unit: 'ml' },
    ],
    miscs: [
        new Misc('misc_214', 2, 0.5, 0.3, 0.5, 1, null, null, null, 2, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_119', 0, 0.5, 0, 0, 0, null, null, 1, 0, null, 0.5, 1, 1, null, null, null, 0.5, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_250', 0, 1, 0, 0, 1, null, null, 0, 0, null, 0, 0, 0, 3, null, 1, 0, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_410', 0, 0.6, 0, 0, 0, 5, 2, 0, 1, null, 1, 0, 0, 0, null, 0, 0, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_516', 0, 0, 0.3, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 4, null, 0, 0, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_416', 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, null, 0, 0, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_417', 0, 1, 0, 0, 1.5, 0, 2, 0, 0, 0, 0, 0, 0, 0, null, 0, 0, 0.2, 0.3, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_418', 0, 0.5, 0, 2, 1, 0, 0, 0, 0, 0, 0, 10, 0, 200, null, 0, 0, 0, 0, 1, 1, 4, 0, 0).toJSON(),
        new Misc('misc_419', 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 3, 0, 0, 0, 0, 0, 200, 1000).toJSON(),
        new Misc('misc_420', 0, 1, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, null, 0, 0, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Misc('misc_421', 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 2, 0, 0, 0, 0, 0, 200, 0).toJSON(),
    ]
}
