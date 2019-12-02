const dataArr = require("../data/friends")

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(dataArr)
    })

    app.post("/api/friends", (req, res) => {
        let currentPerson = req.body
        console.log(currentPerson)
        let matchScoreArr = []

        dataArr.forEach((person) => {
            let matchScore = 0
            for (let score in person.scores) {
                matchScore += Math.abs(parseInt(person.scores[score]) - parseInt(currentPerson.scores[score])) 
            }
            matchScoreArr.push(matchScore)
            console.log(`Match Score for ${person.name} is ${matchScore}`)
        })

        var bestMatch = matchScoreArr.indexOf(Math.min(...matchScoreArr))
        console.log("Best Match: ")
        console.log(dataArr[bestMatch])
        dataArr.push(req.body)
    })
}