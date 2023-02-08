// 関数定義(メソッド)
function calculate(x) {
    var y = x + 5
    return y
}

// 関数(メソッド)の実行
var answer = calculate(3);
console.log(answer);

// 税率
const TAX = 0.1;

// メソッド定義
function totalPrice(price, amount) {
    var total_price = price * amount * (1 + TAX);
    return total_price.toFixed()
}

// メソッド実行
var total_price = totalPrice(300, 5);
console.log(total_price);

// 無名関数
const hello = function (name) {
    return name + "さん、いらっしゃい！"
}

var message = hello("横浜 太郎");
console.log(message);

// アロー関数(Arrow) anfn
const hello2 = (name) => {
    return name + "さん、いらっしゃい！";
}
var message = hello2("横浜 太郎");
console.log(message);

// onload
// HTMLの読み込みが完了したら実行
window.onload = () => {
    console.log("東京");
}

console.log("横浜")