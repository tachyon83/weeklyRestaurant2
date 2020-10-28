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

var members = {
    [member1.id]: member1,
    [member2.id]: member2
}

module.exports = class MemberTempDAO {
    constructor() { }
    findById = (id, cb) => {
        if (members[id] != null) cb(null, true);
        else cb("this ID does not exist", false);
    }
    matchPw = (id, pw, cb) => {
        if (members[id].pw == pw) cb(null, members[id].toJSON())
        else cb("this PW is incorrect", false);
    }
}