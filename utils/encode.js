const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = pw => bcrypt.genSalt(saltRounds)
    .then(salt => {
        return bcrypt.hash(pw, salt)
    })
    .then(hash => {
        return Promise.resolve(hash)
    })