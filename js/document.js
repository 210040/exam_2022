document.write('<h1>プロフィール</h1>')
document.write('<h2>名前</h2>')
document.write('<p>東京 太郎</p>')

var outputP = function (message) {
    var tag = "<p>" + message + "</p>"
    document.write(tag)
}

outputP("旅行")
outputP("ゲーム")
outputP("スポーツ")

document.title = "プロフィール"
document.body.style.color = "#808080"
document.body.style.background = "#fffaf0" 
document.write('<img src="./images/tokyo_station.jpg" width="500"')

var outputImg = (image_name) => {
    var image_path = "./images/" + image_name
    var tag = `<img src = "${image_path}" width="${width}">`
    document.write(tag)
}

outputImg("tokyo_station.jpg", 300)
outputImg("tokyo_station.jpg", 100)