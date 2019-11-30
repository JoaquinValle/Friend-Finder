// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

let object = {
    name: "name",
    photo: "link",
    scores: [4, 3, 2]
}

let sampleScores = [1, 5, 1]

console.log(object.scores)
console.log(sampleScores)

let matchScore = 0

// otro for para comparar con todos 

for (let i = 0; i < object.scores.length; i++) {
    matchScore += Math.abs(object.scores[i] - sampleScores[i]) 
}

console.log(matchScore)

// Display pic and prof of best match

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * The closest match will be the user with the least amount of difference.