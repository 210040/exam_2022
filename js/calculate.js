var hp = 3

// 二項演算
console.log(hp + 1)
console.log(hp - 2)
console.log(hp * 3)
console.log(hp / 2)
console.log(hp % 2)

// 単項演算
hp = 3
hp++
console.log(hp)
--hp
console.log(hp)

// 複合演算
console.log("複合演算")
hp = 5
hp += 3
console.log(hp)

hp -= 2
console.log(hp)

hp *= 3
console.log(hp)

hp /= 2
console.log(hp)

// 文字列の連結
hp = 10
var monster_name = "スライム";
var status_message = monster_name + "があらわれた";
console.log(status_message)

status_message = monster_name + "のHPは" + hp
console.log(status_message)

// リテラルテンプレート
status_message = `${monster_name}のHPは${hp}`;
console.log(status_message);

var message = "この物語は"
message += "フィクションです"
console.log(message);

message += 2020
console.log(message);

var attack = 10;
hp = 50;
hp = hp - attack;
console.log(hp);

var is_bool
hp = 10;
is_bool = (hp == 20);
console.log(is_bool)

// 三項演算
hp = 10;
var result = (hp <= 20) ? "ピンチ" : "まだ平気";
console.log(result)

// 問題1
var total_price = 0;
var price = 300;
var amount = 5
var discount = 100;
const TAX_RATE = 0.1;

// 問題2
total_price = price * amount * (1 + TAX_RATE) - discount;
console.log(total_price);