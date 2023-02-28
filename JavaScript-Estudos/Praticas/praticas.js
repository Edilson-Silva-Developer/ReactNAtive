//função numerica com tipos de dados 
console.log(typeof 5 + typeof 12);
console.log(8 - 2);
console.log(10 / 2);
console.log(8 * 2);
console.log(25 % 2);


console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.log(2 * 4 - 10);
console.log(5 + (4 * 4));

console.log("Edilson Antonio");// com aspas duplas
console.log('Edilson silva');//com aspas simples.
console.log(`Edilson`);//backticks nas string funciona normal


//String com concatenação, espaços, pulando linhas.
console.log("Ola\ \ mundo\nHelo World");
console.log('Edilson e "Juliana"');
console.log("Juliana e 'Edilson'");
console.log(`A soma de 4 + 4 é ${4 + 4}`); //a soma  de numero co, a string só funciona usando backtick.
console.log(`A soma de 10 + 11 é ${10 + 11}`); //a soma  de numero co, a string só funciona usando backtick.
console.log("Edilson " + "e" + " Juliana");//concatenação de nomes.
console.log("Ola" + " Mundo" + "\nHola \ \ world " + 'Java ' + " Script\n" + `A soma de 5 + 5 é ${5 + 5} ` + "\nReact 'Native'");
console.log(`A soma dos nomes Edilson + Antonio é igua a ${`Edilson ` + `Antonio`}`);



console.log(10 > 2);//maior que
console.log(200 > 100);//maior que 
console.log(5 > 2);//maior que
console.log(10 < 11);//menor que 
console.log(5 >= 6);//maior que ou igual
console.log(10 <= 11);//menor que ou igual
console.log(10 == 11);//igual
console.log(10 != 1);//diferente
console.log(5 === 5);//indentico 


console.log(7 > 5 && 77 == 77); // para ser true ambos os lados tem que ser true
console.log(8 == 8 || 8 == 11);//para ser true um dos lados tem que ser true.
console.log("Edilson" == "Edilson" && "Julaina" == "Julaina");//ambos as String são iguais com isso o resultado true.
console.log(!"Edilson" == "Edilson" && "Julaina" == "Julaina");//inverte os resultado mesmo sendo true se torna false


//Operadores ternarios
console.log(10 > 20 ? 'É sim ' : 'É não');
console.log(5 < 8 ? 'É sim' : 'É não');
console.log(10 >= 22 ? 'É sim' : 'É nao');
console.log(200 <= 300 ? 'É sim' : 'É não');
console.log(44 == 4 ? 'É sim' : 'Não' );
console.log( 50 != 55 ? 'sim' : 'Não');
console.log("Edilson" === "Edilson" ? 'SIM':'Não');
console.log( 10>9 && 20 ==20 ? 'verdadeiro':'falso');
console.log( 10>11 || 20 ==2 ? 'verdadeiro':'falso');

//conversão de tipos de dados automaticos

console.log("10" + 1);
console.log("50" - 4);