let a = [1, 3, 5, 7]

const handler = async arr => {
    await arr.map(async e => {
        await console.log(e)
    })
    console.log('complete')
}

handler(a)


a = ['abc', 1]
a = a.join('=')

let sql = `select * from someTable where ${a};`
console.log(sql)

