// ubicar elemento/s dentro del DOM
//## usando su ID - elemento único

var link = document.getElementById('link');

    link.innerText = 'Elemento encontrado';

//## usando su nombre de etiqueta - coleccion de HTML

var links = document.getElementsByTagName('a');
    console.log(links);
    links[3].innerText = 'Elemento encontrado';
var lis = document.getElementsByTagName('li');
    lis[2].style.backgroundColor = '#e9e9e9';

//## usando su nombre de clase - coleccion de HTML
var articulos = document.getElementsByClassName('producto');
    console.log(articulos);
    articulos[2].style.backgroundColor = '#e9e9e9';
    articulos[0].style.backgroundColor = '#e9e9e9';

//## usando su selector

