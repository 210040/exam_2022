var priceElement = document.getElementById('price')
console.log(priceElement)

var price = priceElement.textContent
console.log(price)

var messageElement = document.getElementById('message')
messageElement.innerHTML = "<span>いらっしゃい</span>"

var titleElement = document.getElementById('title')
titleElement.innerHTML = "DICE"

document.getElementById('result').innerHTML = randomNumber(1, 6)

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max + 1 - min) + min)
    return number
}