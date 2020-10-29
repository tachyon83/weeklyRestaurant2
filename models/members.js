function Member(id, pw) {
    this.id = id;
    this.pw = pw;
}
Member.prototype.toJSON = function () {
    return {
        id: this.id,
        pw: this.pw
    }
}
const member1 = new Member('hgd', '123')
const member2 = new Member('kim', '123')

module.exports = {
    [member1.id]: member1,
    [member2.id]: member2
}