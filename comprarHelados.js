
const compra = (nombre)=> {
    let dinero = prompt(`Cuánto dinero tenés en la billetera ${nombre}`);
    if (dinero >= 0.50 && dinero < 1.20) return (`${nombre}, podés comprar un palito de agua!`);
    if (dinero >= 1.20 && dinero < 1.50) return (`${nombre}, podés comprar un palito de crema!`);
    if (dinero >= 1.50 && dinero <= 1.75) return (`${nombre}, podés comprar un cucurucho!`);
    if (dinero >= 1.75 && dinero <= 2.50) return (`${nombre}, podés comprar un cucurucho doble!`);
    if (dinero >= 2.50 ) return (`${nombre}, podés comprar un cuarto de helado!`);
    else return (`${nombre}, no tenés plata suficiente para comprar ningun helado!`)
}

