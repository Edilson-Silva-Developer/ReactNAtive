function imprimirNoConsole() {
    console.log("Teste de Função");
} imprimirNoConsole();




function imprimirUmNumero(num) {
    console.log("O numero é: " + num);
}
imprimirUmNumero(1966);
imprimirUmNumero(1968);
imprimirUmNumero(1989);
imprimirUmNumero(1990);




const numeroAleatorio = function () {
    console.log(Math.random());
}
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();




function multplicarTresNumeros(x, y, z) {
    return x * y * z;
}
console.log(multplicarTresNumeros(2, 3, 4));

const mult = multplicarTresNumeros(5, 4, 8);
console.log("O valor é: " + mult);






//cnh
function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}
console.log(podeDirigir(19, true));
console.log(podeDirigir(33, true));
console.log(podeDirigir(17, false));
