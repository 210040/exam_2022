var counterElement = document.getElementById("conter")
var interval = 1000
var timer

var count = 0
var updateCount = function () {
    count++
    counterElement.innerHTML = count
}

const start = () => {
    console.log("start")
    clearInterval(timer)
    timer = setInterval(updateCount, interval)

    // var count = 0
    // timer = setInterval(function () {
    //     count++
    //     counterElement.innerHTML = count

    // }, interval)
}

const stop = () => {
    console.log("stop")
    clearInterval(timer)
}