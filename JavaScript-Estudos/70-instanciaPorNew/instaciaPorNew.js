//*EM muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também

function Cachorro(raca,patas,cor){

    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function(){
        console.log("AUUuuuu");
    }
}

    let husky = new Cachorro('Husky', 4,"Cinza");
        console.log(husky);
        husky.latir();

    let Dachshund = new Cachorro("Dachshund", 4 , "Preto");
        console.log(Dachshund);
        Dachshund.latir();