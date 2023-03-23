//exemplo de função para imprimir 

function imprimirExercicio() {
    console.log("Ola Edilson exercicio iniciado");
} imprimirExercicio();

function imprimirNome() {
    console.log("Edilson " + "Juliana");
} imprimirNome();




//exemplo template literals 

function imprimirIdade(ida){
    console.log("Ola voce tem: " + ida);
}imprimirIdade(33);




//Operações matematicas
function somaNumeros(n1,n2,n3,n4){
    return n1 + n2 + n3 + n4;
}console.log("A soma dos numeros são: " + somaNumeros(100,100,1,1));
console.log("Os nuemro são: " + somaNumeros(1,2,3,4));


function subNumero(a,b){
    return a - b;
}console.log("A sua idade em 2023 é : " + subNumero(2023,1989));


function divNumero(c,d){
    return c / d;
}console.log("A divisão dos numeros: " + divNumero(100,10));




//numero aleatorio, tipo sorte sortei
function numeroAleatorio(num){
    return Math.floor(Math.random() * num) + 1;
}
 console.log(numeroAleatorio(50));

