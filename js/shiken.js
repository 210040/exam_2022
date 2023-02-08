var link = document.createElement('a');
link.appendChild(document.createTextNode('クリックすると色が変わります'));
var body = document.getElementsByTagName('body')
body[0].appendChild(link);


var _blue = 'rgb(0, 0, 255)';

var _white = 'rgb(255, 255, 255)';

var _red = 'rgb(255, 0, 0)';

link.addEventListener('click' ,function(){

var bg = document.body.style.backgroundColor;

if (document.body.style.backgroundColor == _red) {

    document.body.style.backgroundColor = _blue;

}else if (document.body.style.backgroundColor == _blue) {

    document.body.style.backgroundColor = _white;

}else {

document.body.style.backgroundColor = _red;
}
});