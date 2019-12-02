const dataArr = require("../data/friends")

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(dataArr)
    })

    app.post("/api/friends", (req, res) => {
        console.log(req.body)
        let currentPerson = req.body
        let matchScoreArr = []

        dataArr.forEach((person) => {
            let matchScore = 0
            for (let score in currentPerson.scores) {
                matchScore += Math.abs(person.scores[score] - currentScores[score]) 
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