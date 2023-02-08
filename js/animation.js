// id=photo のElement取得
var photo = $('#photo')

//Elementを隠す
photo.hide()

function open() {
    // 3秒のフェードイン
    photo.fadeIn(2000, 'swing', () => {
        setTimeout(close, 5000);
    });
}

function close() {
    // 3秒のフェードアウト
    photo.fadeOut(2000, 'swing', () => {
        setTimeout(open, 500);
    });
}

// HTML読み込み終了後に処理
$(() => {
    open()
})