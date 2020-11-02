var members = require('./members')

module.exports = class MemberTempDAO {
    constructor() { }
    findById = (id, cb) => {
        if (members[id] != null) cb(null, members[id]);
        else cb(null, false);
    }
    // matchPw = (id, pw, cb) => {
    //     if (members[id].pw == pw) cb(null, members[id].toJSON())
    //     else cb("this PW is incorrect", false);
    // }
}