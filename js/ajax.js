// id=getText のElementをクリックしたら
$('#getText').on('click', () => {
    const href = location.href
    const index = href.lastIndexOf('/') + 1;
    const baseUrl = href.substring(0, index);
    const apiUrl = baseUrl + 'data/foods.json'

    $.ajax({
        type: "get",
        url: apiUrl,
        dataType: "text",
    }).done((data) => {
        // JSONデータ取得
        console.log(data)
        // JSONデータをパース
        var result = JSON.parse(data)
        console.log(result)
        console.log(result.foods)
    });
})