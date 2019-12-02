// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all 
//      possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.

const dataArr = require("../data/friends")

module.exports = (app) => {
    app.get("/api/friends", (res, req) => {
        res.json(dataArr)
    })

    app.post("/api/friends", (res, res) => {
        dataArr.push(req.body)
    })
}