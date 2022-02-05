document.addEventListener("keydown", dibujarBlue);
const cuadrito = document.getElementById("areaDeDibujo");
const papel = cuadrito.getContext("2d");

const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var inicio = 200;
var x = inicio;
var y = inicio;
var n = 0;
var tono = "black";

dibujarlinea("red", x - 2, y - 2, x + 2, y + 2, papel);

var cabeza = parseInt(Math.ceil(Math.random() * 30)) * 10;
var cola = parseInt(Math.ceil(Math.random() * 30)) * 10;

raton()

function dibujarlinea(color, x1, y1, x2, y2, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarPunto(color, x1, y1, x2, y2, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 6;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarBlue(evento) {
    var distancia = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarlinea(tono, x, y, x, y - distancia, papel);
            y -= distancia;
            break;
        case teclas.DOWN:
            dibujarlinea(tono, x, y, x, y + distancia, papel);
            y += distancia;
            break;
        case teclas.LEFT:
            dibujarlinea(tono, x, y, x - distancia, y, papel);
            x -= distancia;
            break;
        case teclas.RIGHT:
            dibujarlinea(tono, x, y, x + distancia, y, papel);
            x += distancia;
            break;
        default:
            console.log("a tu puta casa animal!");
    }

    if (x == cabeza) {
        if (y == cola) {
            cabeza = parseInt(Math.ceil(Math.random() * 30)) * 10;
            cola = parseInt(Math.ceil(Math.random() * 30)) * 10;
            raton()
        }
    }
}

function raton() {
    var colorRaton = "black";
    dibujarPunto(colorRaton, cabeza - 2, cola - 2, cabeza + 2, cola + 2, papel);
    n += 1
    if (n < 5) {
        switch (n) {
            case n = 1:
                tono = "black";
                break;
            case n = 2:
                tono = "red";
                break;
            case n = 3:
                tono = "green";
                break;
            case n = 4:
                tono = "orange";
                break;
            case n = 0:
                tono = "blue";
                break;
            default:
                tono = "blue";
        }
    } else {
        tono = "blue";
        n -= 5;
    }
    console.log(`color: ${tono} = ${n}`);
}