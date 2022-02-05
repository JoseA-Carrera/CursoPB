var imagenes = [];
imagenes["50"] = "img/billete50.png";
imagenes["20"] = "img/billete20.png";
imagenes["10"] = "img/billete10.png";
imagenes["5"] = "img/billete5.jpg";

class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 5));
caja.push(new Billete(5, 5));

cuenta();

var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero() {
    var dibujado = [];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if (total >= dinero) {
        for (var bi of caja) {
            if (dinero > 0) {
                div = Math.floor(dinero / bi.valor);
                if (div > bi.cantidad) {
                    papeles = bi.cantidad;
                } else {
                    papeles = div;
                }
                bi.cantidad -= papeles;
                for (var i = 0; i < papeles; i++) {
                    dibujado.push(new Billete(bi.valor, 1));
                }
                dinero = dinero - (bi.valor * papeles);
            }
        }
        if (dinero == 0) {
            resultado.innerHTML += "Se ha retirado: <br />";
            for (var e of dibujado) {
                resultado.innerHTML += "<img src=" + e.imagen.src + " />";
            }
            resultado.innerHTML += "<hr />";
            cuenta();
        } else {
            resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
        }

    } else {
        resultado.innerHTML += "Soy un cajero pobre y no tengo dinero :( <hr />";
    }
}

function cuenta() {
    total = 0
    for (var tot of caja) {
        total += tot.valor * tot.cantidad;
    }
    console.log(total);
}

function compatibilidad() 
{
    if (dinero > dinero_disponible)
    {
        resultado.innerHTML = "No tenemos tantos billetes";
    } 
    else {
        if (dinero % 10 == 0 && dinero > 0) {
            entregarDinero();
        } else if (dinero == 0) {
            resultado.innerHTML = "Para que vienes al cajero?";
        } else if (dinero % 10 !== 0 && dinero > 0) {
            resultado.innerHTML = "Inserte solo múltiplos de 10!";
        } else if (dinero < 0) {
            resultado.innerHTML = "No se pueden insertar valores negativos";
        }
    }
}



// class Billete {
//     constructor(valor, cantidad) {
//         this.valor = valor;
//         this.cantidad = cantidad;
//     }
// }
// var entregado = [];
// var box = [];
// box.push(new Billete(50, 3));
// box.push(new Billete(20, 2));
// box.push(new Billete(10, 2));
// box.push(new Billete(5, 2));

// var div = 0;
// var papeles = 0;
// var dinero = 0;

// const result = document.getElementById("resultado");
// const boton = document.getElementById("extraer");
// boton.addEventListener("click", entregarDinero);


// function entregarDinero() {
//     var t = document.getElementById("dinero");
//     dinero = parseInt(t.value);
//     for (var bi of box) {
//         if (dinero > 0) {
//             div = Math.floor(dinero / bi.valor);
//             if (div > bi.cantidad) {
//                 papeles = bi.cantidad;
//             } else {
//                 papeles = div
//             }
//             entregado.push(new Billete(bi.valor, papeles))
//             dinero = dinero - (bi.valor * papeles);
//         }
//     }
//     if (dinero > 0) {
//         result.innerHTML = `manito este cajero es para la pepol normal`;
//     } else {
//         for (var e of entregado) {
//             if (e.cantidad > 0) {
//                 result.innerHTML += `${e.cantidad} billetes de $${e.valor} <br>`
//             }

//         }
//     }

// }