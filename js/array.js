var drinks = ['コーヒー', '紅茶', 'ほうじ茶']
console.log(drinks)
console.log(drinks.length)

var drink = drinks[1]
console.log(drink)

// 最初に値（要素）追加
drinks.push('炭酸水')
console.log(drinks)
console.log(drinks.length)

// 最後の値（要素）削除
drinks.pop()
console.log(drinks)
console.log(drinks.length)

// 最初の値（要素）削除
drinks.shift()
console.log(drinks)
console.log(drinks.length)

// 最初に値（要素）追加
drinks.unshift('オレンジジュース')
console.log(drinks)
console.log(drinks.length)

// Index = 1 の（要素）追加、配列削除なし = 0
drinks.splice(1, 0, 'コーヒー')
console.log(drinks)
console.log(drinks.length)

// Index = 1 の（要素） から1つ削除
drinks.splice(1, 1)
console.log(drinks)
console.log(drinks.length)

// Indexの取得
var index = drinks.indexOf('ほうじ茶')
console.log(index)

// Indexを取得して値を更新
drinks[1] = "ウーロン茶"
console.log(drinks)
console.log.apply(drinks.length)

// 曜日の取得
var weekdays = ['日', '月', '火', '水', '木', '金', '土']
var date = new Date()
var weekIndex = date.getDay()
var weekString = weekdays[weekIndex]

document.getElementById("weekday").innerHTML = weekString
