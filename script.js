var body = document.querySelector('body');
var container = document.getElementById('container');

(function board() {

  for (var i = 1; i < 17; i++) {

  var checker = document.createElement('div');

    checker.style.float = "left";
    checker.style.paddingBottom = '150px';
    checker.style.width = '150px';
    checker.style.border = 'solid 1px black';
    checker.style.backgroundColor = 'teal';
    checker.setAttribute('id', 'div' + i);

    container.appendChild(checker);
    }
  })();
