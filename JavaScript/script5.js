function dados1() {

    var dados1 = document.getElementById('dados1');
    var texto = prompt('Digite seu nome:');

    dados1.innerHTML = '<b>Ola ' + texto;
}

function dados2(dados1) {

    var dados2 = document.getElementById('dados2');
    var texto = prompt('Digite seu sobrenome:');

    dados2.innerHTML = '<b>Ola ' + dados1 + " " + texto;
}

function idade() {

    var idade = document.getElementById('idade');
    var texto = prompt('Digite sua idade:');

    idade.innerHTML = '<b>Sua idade é: ' + texto;
}

function CPF() {

    var CPF = document.getElementById('CPF');
    var texto = prompt('Digite seu CPF:');

    CPF.innerHTML = '<b>Seu CPF é: ' + texto;
}

function end() {

    var end = document.getElementById('end');
    var texto = prompt('Digite seu endereço: ');

    end.innerHTML = '<b>Seu endereço é: ' + texto;

}