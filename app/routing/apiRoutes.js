const dataArr = require("../data/friends")

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(dataArr)
    })

    app.post("/api/friends", (req, res) => {
        dataArr.push(req.body)
    })
}