module.exports = (req, res, result, code, data) => {
    res.json({
        result,
        code,
        data,
    })
}