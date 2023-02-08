var drinks = ["コーヒー", "紅茶", "ほうじ茶"]

drinks.forEach(function(drink) {
    console.log(drink)
})

var scores = [80, 74, 63, 71, 68]

// score を２倍
var new_scores = scores.map(function(score) {
    return score * 2
})
console.log(new_scores)

//70以上のデータのみ作成
new_scores = scores.filter(function(score) {
    return score >= 70
})
console.log(new_scores)

// 合計値
var sum = scores.reduce(function(prev, current) {
    return prev + current 
})
console.log(sum)


//70以上80未満のデータのみ作成
new_scores = scores.filter((score) => score >= 70)
                    .filter((score) => score < 80)
console.log(new_scores)

var items = [
    { id: 1, name: '銅のつるぎ', price: 150 },
    { id: 2, name: '鉄のやり', price: 550 },
    { id: 3, name: '皮のたて', price: 90 },
    { id: 4, name: '鉄のかぶと', price: 850 },
    { id: 5, name: '皮のぼうし', price: 50 },
];

items.forEach(function(item) {
    var message = `${item.name} は ${item.price}G です`;
    console.log(message);
});

var new_items = items.map(function(item) {
    item.price -= 10;
    return item;
}) 
console.log(new_items)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.reduce(function(acc, value) {
    return acc + value;
});
console.log(sum)

var numbers = [34, 39, 93, 87, 52, 3, 10, 97, 5];
var max = numbers.reduce(function(acc, value) {
    return Math.max(acc, value)
});
console.log(max)
