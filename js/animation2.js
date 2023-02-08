var photo = $('#photo')

$(() => {

    // slideToRight()

    // click event を追加
    $('#startBtn').on('click', slideToRight)
    $('#stopBtn').on('click', stop)

    $('#rightBtn').on('click', slideToRight)
    $('#leftBtn').on('click', slideToLeft)
    $('#downBtn').on('click', slideToDown)
    $('#upBtn').on('click', slideToUp)

    function stop() { 
        photo.stop()
    }

    function slideToRight() {
        if (!photo.is(':animated')){
            photo.animate(
                { left: 300 }, 1000, 'swing'
            )
        }
    }

    function slideToLeft() {
        if (!photo.is(':animated')){
            photo.animate(
            { left: 50 }, 1000, 'swing'
            )
        }
    }

    function slideToUp() {
        if (!photo.is(':animated')){
            photo.animate(
                { top: 50 }, 1000, 'swing'
            )
        }
    }

    function slideToDown() {
        if (!photo.is(':animated')){
            photo.animate(
                { top: 300 }, 1000, 'swing'
            )
        }
    }
})