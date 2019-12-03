const dataArr = require("../data/friends")

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(dataArr)
    })

    app.post("/api/friends", (req, res) => {
        let currentPerson = req.body
        console.log("New Entry")
        console.log(currentPerson)
        console.log("----------------------------------------------------")
        let matchScoreArr = []
        //let factScoreArr = []

        dataArr.forEach((person) => {

            person.match = false
            // let factScore = person.fact.length
            // factScoreArr.push(factScore)

            let matchScore = 0
            for (let score in person.scores) {
                matchScore += Math.abs(parseInt(person.scores[score]) - parseInt(currentPerson.scores[score])) 
            }
            matchScoreArr.push(matchScore)
            console.log(`Match Score for ${person.name} is ${matchScore}`)
        })
        console.log("----------------------------------------------------")
        // Fact Score is ${factScore}
        let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index)
        let duplicates = [...new Set(findDuplicates(matchScoreArr))]
        console.log("Duplicates: " + [...new Set(findDuplicates(matchScoreArr))])

        if (Math.min(...matchScoreArr) === Math.min(...duplicates)) {
            console.log("minimum duplicates exist")
            console.log(dataArr[matchScoreArr.indexOf(Math.min(...duplicates))])
        }
        var bestMatch = dataArr[matchScoreArr.indexOf(Math.min(...matchScoreArr))]
        console.log("Best Match: ")
        console.log(bestMatch)
        console.log("----------------------------------------------------")
        bestMatch.match = true
        dataArr.push(req.body)
    })
}

