var users = [
    { name: 'A', score: 65 },
    { name: 'B', score: 92 },
    { name: 'C', score: 81 },
    { name: 'D', score: 71 },
    { name: 'E', score: 72 },
]

var sumElement = document.getElementById('sum')
var avgElement = document.getElementById('average')
var varElement = document.getElementById('variarance')
var sdElement = document.getElementById('sd')
var scoreBody = document.getElementById('score_body')

// sum
var sum = 0
for (const user of users) {
    sum += user.score
}
// sum = users.reduce((sum, user) => sum + user.score, 0)
sumElement.innerHTML = sum

// average
var average = 0
average = sum / users.length
avgElement.innerHTML = average

// variarance
var variarance = 0
var sum_variarance = 0
for (const user of users) {
    sum_variarance += (user.score - average) ** 2
}
variarance = sum_variarance / users.length
varElement.innerHTML = variarance

// Standard Deviation
var sd = 0
sd = Math.sqrt(variarance)
sdElement.innerHTML = sd

const makeScore = () => {
    for (const user of users) {
        var tr = document.createElement('tr')
        var td_name = document.createElement('td')
        var td_score = document.createElement('td')
        var td_dev = document.createElement('td')

        td_name.innerHTML = user.name
        td_score.innerHTML = user.score
        td_dev.innerHTML = (10 * (user.score - average) / sd) + 50

        tr.appendChild(td_name)
        tr.appendChild(td_score)
        tr.appendChild(td_dev)

        scoreBody.appendChild(tr)
    }
}