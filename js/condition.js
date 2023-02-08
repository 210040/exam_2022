var hp = 10
var attack = 10
var message = ""

hp -= attack

if (hp > 0) {
    message = "モンスターの攻撃"
} else {
    message = "モンスターを倒した"
}
document.getElementById('message').innerHTML = message

var date = new Date()
// 曜日の数字取得
var weekindex = date.getDay()
var weekday = "水"
var type = ""

switch (weekindex) {
    case 1:
    case 6:
        type = "燃えるゴミ"
        break;

    case 3:
        type = "燃えないゴミ"
        break;
    
    default:
        type = "回収なし"
        break;
}
document.getElementById("message").innerHTML = type