
var pokes = []
pokes["chamander"] = "img/pollo.png"
pokes["squirtle"] = "img/cerdo.png"
pokes["bulbasur"] = "img/vaca.png"

var pokedex  = [];
pokedex.push(new Pakiman("chamander","fuego" , 10, 20, 15 ));
pokedex.push(new Pakiman("squirtle","agua" , 10, 25, 12  ));
pokedex.push(new Pakiman("bulbasur","planta" , 10, 30, 10 ));

for(var x of pokedex){
    x.mostrar();
}


for(var y of pokedex[0]){
    
    console.log(y);
}