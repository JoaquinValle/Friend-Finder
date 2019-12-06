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

        dataArr.forEach((person) => {
            person.match = false
            let factScore = person.fact.length
            person.factScore = parseInt(factScore)
            let matchScore = 0
            for (let score in person.scores) {
                matchScore += Math.abs(parseInt(person.scores[score]) - parseInt(currentPerson.scores[score])) 
            }
            matchScoreArr.push(matchScore)
            console.log(`Match Score for ${person.name} is ${matchScore}; Fact Score is ${factScore}`)
        })
        console.log("----------------------------------------------------")
        
        let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index)
        let duplicates = [...new Set(findDuplicates(matchScoreArr))]
        console.log("Duplicates: " + [...new Set(findDuplicates(matchScoreArr))])

        if (Math.min(...matchScoreArr) === Math.min(...duplicates)) {
            console.log("\x1b[31m","Minimum Duplicates Exist","\x1b[0m")
            let indexes = []
            getAllIndexes(matchScoreArr, Math.min(...duplicates))
            function getAllIndexes(arr, val) {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === val) {
                        indexes.push(parseInt(i))
                    } 
                }
                console.log(`Duped indexes: ${indexes}`)
            }
            let factScoreArr = []
            for (let i of indexes) {
                factScoreArr.push(parseInt(dataArr[i].factScore))
            }
            console.log(`Fact Scores: ${factScoreArr}`)
            let maxFact = factScoreArr.indexOf(Math.max(...factScoreArr))
            console.log("Max Fact Score: " + maxFact)
            let bestMatch = dataArr[indexes[parseInt(maxFact)]]
            console.log("Best Match:")
            console.log(bestMatch)
            console.log("----------------------------------------------------")
            bestMatch.match = true
        }
        else {
            let bestMatch = dataArr[matchScoreArr.indexOf(Math.min(...matchScoreArr))]
            console.log("Best Match: ")
            console.log(bestMatch)
            console.log("----------------------------------------------------")
            bestMatch.match = true
        }
        dataArr.push(req.body)
    })
}