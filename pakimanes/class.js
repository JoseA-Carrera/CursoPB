class Pakiman{
    constructor(pakiman ,tipo, nivel ,salud, ataque){
        this.imagen = new Image();
        this.pakiman = pakiman
        this.tipo = tipo;
        this.salud = salud;
        this.ataque = ataque;
        this.nivel = nivel;
        this.info = `${this.pakiman} de tipo ${this.tipo} tiene un nvl ${this.nivel} con una salud de ${this.salud} y ataque de ${this.ataque}`
        this.imagen.src = pokes[this.pakiman];
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
    mostrar(){
        document.write("<p>")
        document.body.appendChild(this.imagen);
        document.write(`<strong> ${this.pakiman} </strong> <br>`);
        document.write(`tipo: ${this.tipo} <br>`);
        document.write(`nivel: ${this.nivel} <br>`);
        document.write(`salud: ${this.salud} <br>`);
        document.write(`ataque: ${this.ataque}`);

    }
}