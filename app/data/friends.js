// 5. You should save your application's data inside of `app/data/friends.js` 
// as an array of objects. Each of these objects should roughly follow the format below.


// Pasar todos los objetos en dataArr
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

module.exports= dataArr

// Pasar el objeto de la persona que esta buscando
let sampleScores = [1, 5, 1]

// otro for para comparar con todos 
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