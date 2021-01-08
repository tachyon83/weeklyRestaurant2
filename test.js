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

a = [[1, 2, 3], [4, 5], [6, 7, 8]]
const lowerHandler = async arr => {
    const res = await arr.map(e => e + 5)
    console.log('lowerRes', res)
    return res
}
const upperHandler = async arr => {
    const res = await arr.map(elem => lowerHandler(elem))
    console.log('upperRes', res)
    return res
}

// const promiseRemover = async (f, arg) => {
//     const res = await f(arg)
//     console.log(res)

//     return Promise.all(res.map(async e => await e))
//     // console.log(res2)

//     // return res
// }

// promiseRemover(upperHandler, a).then(res => console.log(res))


// const f = async () => {
//     const res = await upperHandler(a)
//     return res[0]
// }
// f()

upperHandler(a).then(async res => {
    console.log(res)
    console.log(res[0])
    await res[0].then(trueRes => {
        console.log(trueRes[2])
    })
})
