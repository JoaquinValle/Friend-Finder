let dataArr = [
  {
    name: "John",
    photo: "link",
    scores: [4, 3, 2]
  },
  {
    name: "James",
    photo: "link",
    scores: [1, 5, 2]
  }
]

let sampleScores = [1, 5, 1]

let matchScoreArr = []

dataArr.forEach(person => {
    let matchScore = 0
    for (let i = 0; i < person.scores.length; i++) {
        matchScore += Math.abs(person.scores[i] - sampleScores[i]) 
    }
    matchScoreArr.push(matchScore)
    console.log(`Match Score for ${person.name} is ${matchScore}`)
})

for (let i in matchScoreArr) {
    dataArr[i].match = matchScoreArr[i]
}
console.log(dataArr)

module.exports= dataArr
