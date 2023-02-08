var stage = document.getElementById('stage')

// pタグ作成
// <p>スライム<p>
var monsterElement1 = document.createElement('p')
monsterElement1.innerHTML = 'スライム'

// pタグを親要素(stage)に追加
stage.appendChild(monsterElement1)

var monsterElement2 = document.createElement('p')
monsterElement2.innerHTML = 'キメラ'
stage.appendChild(monsterElement2)

stage.removeChild(monsterElement1)

// aリンク作成
// <a href="https://google.com/search?q=スライム" target="_blank">スライム</a>
var a = document.createElement('a')
a.href = "http://google.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank"
a.innerText = monsterElement1.innerHTML

stage.appendChild(a)

// 自分の解答
// var monster1 = document.getElementById('monster1')
// var monsterElement3 = document.createElement('p');
// var imageElement = document.createElement('img');
// imageElement.src = 'images/monster_006.png';
// monsterElement3.innerHTML = 'モンスター1';
// monster1.appendChild(monsterElement3);
// monster1.appendChild(imageElement);

// var monster2 = document.getElementById('monster2')
// var monsterElement4 = document.createElement('p');
// var imageElement = document.createElement('img');
// imageElement.src = 'images/monster_022.png';
// monsterElement4.innerHTML = 'モンスター2';
// monster2.appendChild(monsterElement4);
// monster2.appendChild(imageElement);

// var monster3 = document.getElementById('monster3')
// var monsterElement5= document.createElement('p');
// var imageElement = document.createElement('img');
// imageElement.src = 'images/monster_040.png';
// monsterElement5.innerHTML = 'モンスター3';
// monster3.appendChild(monsterElement5);
// monster3.appendChild(imageElement);

// 解答
const createMonster = (monsterName, imageName) => {
    var monsterFrame = document.createElement('div')
    var monsterElement = document.createElement('p')
    var monsterImage = document.createElement('img')

    // <p>xxxxx</p>
    monsterElement.innerHTML = monsterName

    // <img src="./images/xxxxx.png"/>
    monsterImage.src = "./images/" + imageName + '.png'

    // divに p と img を追加
    monsterFrame.appendChild(monsterElement)
    monsterFrame.appendChild(monsterImage)

    // stage に div を追加
    stage.appendChild(monsterFrame)
}

createMonster('モンスター1', 'monster_006')
createMonster('モンスター2', 'monster_022')
createMonster('モンスター3', 'monster_040')