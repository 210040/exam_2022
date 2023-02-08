// 1 - 100 の数字で 17の倍数を３個表示
var max = 100
var number = 1
var count = 0
while (number <= 100) {
    if (number % 17 == 0) {
        console.log(number)
        count++
    }
    if (count == 3) {
        break;
    }
    number++ 
}

// rarities
var rarities = [
    { type: 'N', name: 'ノーマル', probability: 70 },
    { type: 'NP', name: 'ノーマル+', probability: 20 },
    { type: 'R', name: 'レア', probability: 6 },
    { type: 'SR', name: 'スーパーレア', probability: 3 },
    { type: 'LR', name: 'レジエンド', probability: 1 },
]

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

const play = () => {
    var min = 0
    var max = 100
    var number = randomNumber(min, max)
    var selected_rarity
    for (const rarity of rarities) {
        max = min + rarity.probability
        if (number >= min && number <= max) {
            selected_rarity = rarity
            break;
        }
        min = max
    }
    document.getElementById('rarity_name').innerHTML = selected_rarity.name
    document.getElementById('number').innerHTML = number
}

for (var i = 0; i <= 10; i++) {
    console.log(i)
}

var sum = 0
for (var i = 1; i <= 1000; i++) {
    sum += i
}
console.log(sum);

var drinks = ['コーヒー', 'ミネラルウォーター', 'コーラ', 'ほうじ茶'];
for (var i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

for (var key in drinks) {
    console.log(drinks[key]);
}

var number = 100;
var i = 0;
while (number >= 0) {
    number -= 17;
    i++;
}
console.log(i);
console.log(number);