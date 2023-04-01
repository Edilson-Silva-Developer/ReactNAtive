//copiando objetos - com assign

let carro = {

    portas: 4,
    portamalas: '300Lt',
    motor: '4.0',
}

let complementos = {

    tetoSolar: 'Teto Solar',
    arCodicionado: 'Ar-Cordicionado'
}

console.log(carro); // informação do carro normal

//usando o objeto assign

Object.assign(carro, complementos);
console.log(carro);