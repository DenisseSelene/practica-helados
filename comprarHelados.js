
const compra = (nombre)=> {
    let dinero = prompt(`Cuánto dinero tenés en la billetera ${nombre}`);
    if (dinero >= 0.50 && dinero < 1.20) return (`${nombre}, podés comprar un palito de agua! <br>`);
    if (dinero >= 1.20 && dinero < 1.50) return (`${nombre}, podés comprar un palito de crema! <br>`);
    if (dinero >= 1.50 && dinero <= 1.75) return (`${nombre}, podés comprar un cucurucho! <br>`);
    if (dinero >= 1.75 && dinero <= 2.50) return (`${nombre}, podés comprar un cucurucho doble! <br>`);
    if (dinero >= 2.50 ) return (`${nombre}, podés comprar un cuarto de helado! <br>`);
    else return (`${nombre}, no tenés plata suficiente para comprar ningun helado!`)
}

document.write(compra("Daryl"));
document.write(compra("Michonne"));
document.write(compra("Rick"));

