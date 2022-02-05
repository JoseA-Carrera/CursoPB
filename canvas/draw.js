var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var dibujo = document.getElementById("dibujito");
var ancho = dibujo.width;
var lienzo = dibujo.getContext("2d");
boton.addEventListener("click", dibujoPorclick);

/*dibujarLinea("black", 1, 1, 1, 300)
dibujarLinea("black", 1, 300, 1, 600);
dibujarLinea("black", 1200, 0, 1200, 300);*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



function dibujoPorclick() {
    lienzo.clearRect(0,0,300,300);
    dibujarLinea("black", 1, 1, 1, (ancho - 1));
    dibujarLinea("black", 1, (ancho- 1) , (ancho- 1 ) ,(ancho -1)) ;
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var espacio = ancho / lineas;
    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("black", 0, yi, xf, 300);
        console.log("linea " + l );

    }
    
}


