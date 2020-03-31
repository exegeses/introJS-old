// ubicar elemento dentro del DOM

    var caja = document.getElementById('caja');

// generar función
    function cambiarColor()
    {
        //variables para las luces
        var rojo = 25;
        var verde = 52;
        var azul = 200;

        // cambiar color
        caja.style.backgroundColor = 'rgb('+rojo+', '+verde+', '+azul+')';
    }

    cambiarColor();